import React from 'react';
import add,{Multiply,Divide,Subtract} from './Calc';

function App(){
  return (  <>
    <ul>
        <li>sum of two number is {add(40,4)}</li>
        <li>multiply of two number is {Multiply(12,3)}</li>
        <li>division of two number is {Divide(10,3)}</li>
        <li>subtract of two number is {Subtract(20,10)}</li>
    </ul>
    </>
  );
}

export default App;