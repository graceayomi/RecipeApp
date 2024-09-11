import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IntroApp from './IntroApp';
import CrudApp from './CrudApp';
import RecipeApp from './RecipeApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <IntroApp/> */}
    <CrudApp/>
    {/* <RecipeApp/> */}
  </React.StrictMode>
 
// {/* <>
// <h1>Hello World Greetings from mars</h1>
// <p>Welcome here</p>
// <ul>
//   <li>Welcome Here</li>
//   <li>This is js calss</li>
//   <li>We are having a combined class</li>
// </ul>

// <table border='1'>
//   <thead>
//   <tr>
//     <td> S/N</td>
//     <td>Name</td>
//   </tr>
//   </thead>
//   <tbody>
//   <tr>
//     <td>1</td>
//     <td>Omosare Omogbagi</td>
//   </tr>
//   </tbody>
  

// </table>

// </> */}

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
