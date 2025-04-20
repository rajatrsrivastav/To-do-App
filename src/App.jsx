import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [add, setAdd] = useState([])
  const [complete,setComplete]=useState(true)

  function handleText(event) {
    setText(event.target.value)
  }

  function handleClick() {
    const newText = text.trim()
    if (newText !== '') {
      const oldList = [...add, newText]
      setAdd(oldList)
      setText('')
    }
  }

  function HandleCross(index) {
    const updateAdd = add.filter((_, idx) => idx !== index)
    setAdd(updateAdd)
  }
  function handleComplete(){
    setComplete(!complete)
  }

  return (
    <div className="body">
      <div className="main">
        <p>Pending Tasks</p>
        <div>
          {add.map((val, index) => {
            if (val !== '') {
              return (
                <div className="task" key={index}>
                  <div className="words">
                    <h3 className="display-task" style={{ textDecoration: complete? "none":"line-through"}}>{val}</h3>
                  </div>
                  <div className="Buttons">
                    <button className="complete" onClick={()=>handleComplete()} >Complete</button>
                    <button className="cross" onClick={() => HandleCross(index)}>x</button>
                  </div>
                </div>
              )
            }
          })}
        </div>
        <div className="search">
          <input
            className="addIn"
            value={text}
            placeholder="Add new Task"
            onChange={handleText}
          />
          <button className="add" onClick={handleClick}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
