import React from 'react'
import './App.css';
import CardInputField from './Components/cardInputField/cardInputField';

function App() {
  return (
    <div className="App">
      <h1>Card Number*</h1>
      <span><CardInputField length={4} onChange={(value)=>console.log(value)} />
        </span>
    </div>
  );
}

export default App;
