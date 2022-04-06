import React, {useState} from "react";

function App() {

  const [item, setItem] = useState("")
  const [itemArr, addItem] = useState(["An Item"]);

  function handleItem(event){
    const value = event.target.value;
    setItem(value);
  }

  function handleClick(event) {
    addItem((prevVal) => {
      return [...prevVal, item];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" placeholder="Enter an item" value={item}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemArr.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
