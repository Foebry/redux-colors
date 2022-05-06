import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
};

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state, { payload: { name, color } }) {
      state.colors.push({ id: nanoid(5), name, color });
    },
    removeColor(state, { payload: id }) {
      state.colors = state.colors.filter((color) => color.id !== id);
    },
    changeName(state, { payload: { id, name } }) {
      const colorToChange = state.colors.find((color) => color.id === id);
      colorToChange.name = name;
    },
    changeColor(state, { payload: { id, color } }) {
      const colorToChange = state.colors.find((color) => color.id === id);
      colorToChange.color = color;
    },
  },
});

export default colorSlice;
export const { addColor, removeColor, changeName, changeColor } =
  colorSlice.actions;
