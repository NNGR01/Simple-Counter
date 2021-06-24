import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Contador from './Contador';

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;




setInterval (() => {

    num1++;
    
    ReactDOM.render(<Contador 
        num1={num1}
        num2={num2}
        num3={num3}
        num4={num4}
        num5={num5}
        num6={num6}
  
  
  />
  , document.querySelector('#root'));


},1000);