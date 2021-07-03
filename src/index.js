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

    if(num1 === 10){
      num1 = 0
      num2++
    }
    if(num2 === 6){
      num2 = 0
      num3++
    }
    if(num3 === 10){
      num3 = 0
      num4++
    }  
    
    if(num4 === 6){
      num4 = 0
      num5++
    }
    
    if(num5 === 10){
      num5 = 0 
      num6++
    }
    if(num6 === 2 & num5 === 4){
      num5 = 0
      num6 = 0
    } 
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