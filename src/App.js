import React, { useState } from "react";
import Son from "./components/Son";
import './App.css';

function App() {
  const [count, updateCount] = useState (0);
  const [count1, updateCount1] = useState (0);
  const [count2, updateCount2] = useState (0);
  const [count3, updateCount3] = useState (0);

function sonClicked() {
  updateCount (count + 1);
  if (Son === 1) {
    updateCount1(count1 + 1);
  } if (Son === 2) {
    updateCount2(count2 + 1)
  }
   else {
    updateCount3(count3 + 1)
   }
}


  return (
    <div className="App">
      <header className="App-header">
       
       <Son id={1} sonClicked={sonClicked} cousinCount = {count1} />
       <Son id={2} sonClicked={sonClicked} cousinCount = {count2} />
       <Son id={3} sonClicked={sonClicked} cousinCount = {count3} />
        <br/>
        <p>Miembros de la familia Adams: {count}</p>
      </header>
    </div>
  );
}

export default App;
