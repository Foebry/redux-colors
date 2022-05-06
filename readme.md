# Redux - working with colors

## Link to surge deploy

[sander-redux-colors](https://sander-redux-colors.surge.sh)

## installed modules

    - reduxjs/tookit

## used technology

    - vite
    - vanilla-js

## scope

Using Redux, controlling a single state colors.
each color is an object containing:

     - id
     - name
     - code (hexvalue of colorpicker)r

ColorReducer provides the following actions

     - addColor({name:string,code:string})
     - removeColor(id:string)
     - changeName({id:string, name:string})
     - changeCode({id:string, code:string})

## setup

download code:
`git clone https://github.com/Foebry/redux-colors.git`

install required packages:
`npm i`

run project:
`npm run dev`
