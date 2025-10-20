// 

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

console.log('main')

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div>main start</div>
        <App />
        <div>main end</div>        
    </StrictMode>
)

// import { render } from 'preact'
// import './index.css'
// import App from './app.jsx'
// import { createRoot } from 'react-dom/client'
// import { Children, StrictMode } from 'react'
// import React from 'react'

// document.getElementById('root').textContent = 'Hello from main.jsx'

// console.log('main.jsx подключен')
// //render(<App />, document.getElementById('app'))

// // const element01 = React.createElement(
// //     type: h1, 
// //     probs: { className: 'title'},
// //     Children: 'Hello world'
// // )

// // createRoot(document.getElementById('root')).render(
// //     element01
// // )

// console.log('main')

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <div>main start</div>
//         <App />
//         <App />
//         <div>main end</div>
//     </StrictMode>
// )

// console.log('main')
