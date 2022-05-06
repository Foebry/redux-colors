import "./style.css";
import store from "./data";
import { addColor, changeColor, changeName, removeColor } from "./data/color";

const onBlur = (e) => {
  const id = e.target.parentElement.id;
  const name = e.target.innerText;
  store.dispatch(changeName({ id, name }));
};

const resetBlurEvents = () => {
  const pList = document.querySelectorAll("ul p");
  pList.forEach((p) => {
    p.removeEventListener("blur", onBlur);
    p.addEventListener("blur", onBlur);
  });
};

const render = () => {
  document.querySelector("#app").innerHTML = `
  <h1>Welcome to your colorful app!</h1>
`;

  document.querySelector(".colorList p").innerHTML =
    store.getState().colorState.colors.length > 0
      ? "This is a list of your colors."
      : "You currently have no colors.";

  document.querySelector("form p").innerHTML =
    store.getState().colorState.colors.length == 0
      ? "Start by creating a color."
      : "Let's create another color!";

  document.querySelector("div ul").innerHTML = store
    .getState()
    .colorState.colors.map(
      ({ id, color, name }) =>
        `<li id=${id}><p name='name' style="color:${color}"contentEditable>${name}</p><input type='color' name='color' value=${color} /><button name="delete">X</button></li>`
    )
    .join("");

  resetBlurEvents();
};

render();
store.subscribe(render);

const form = document.querySelector("form");

const nameInput = form.querySelector("input[name='colorName']");

form.onsubmit = (e) => {
  e.preventDefault();
  const newColor = {
    name: form.elements["colorName"].value,
    color: form.elements["colorCode"].value,
  };
  if (newColor.name === "") nameInput.classList.add("error");
  else {
    store.dispatch(addColor(newColor));
    form.reset();
  }
};

nameInput.oninput = (e) => {
  e.target.classList.remove("error");
};

const colorList = document.querySelector("ul");

colorList.onchange = (e) => {
  const id = e.target.parentElement.id;
  const color = e.target.value;
  store.dispatch(changeColor({ id, color }));
};

colorList.onclick = (e) => {
  if (e.target.name !== "delete") return;
  const id = e.target.parentElement.id;
  store.dispatch(removeColor(id));
};
