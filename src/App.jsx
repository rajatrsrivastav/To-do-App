import React, { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [add, setAdd] = useState([])

  function handleText(event) {
    setText(event.target.value)
  }

  function handleClick() {
    const newText = text.trim()
    if (newText !== '') {
      const newTask = { text: newText, isComplete: false }
      setAdd([...add, newTask])
      setText('')
    }
  }

  function handleCross(index) {
    const updateAdd = add.filter((_, idx) => idx !== index)
    setAdd(updateAdd)
  }

  function handleComplete(index) {
    const updatedTasks = add.map((task, idx) =>
      idx === index ? { ...task, isComplete: !task.isComplete } : task
    )
    setAdd(updatedTasks)
  }

  return (
    <div className="body">
      <div className="main">
        <p>Pending Tasks</p>
        <div>
          {add.map((val, index) => (
            <div className="task" key={index}>
              <div className="words">
                <h3
                  className="display-task"
                  style={{ textDecoration: val.isComplete ? 'line-through' : 'none' }}
                >
                  {val.text}
                </h3>
              </div>
              <div className="Buttons">
                <button className="complete" onClick={() => handleComplete(index)}>Complete</button>
                <button className="cross" onClick={() => handleCross(index)}>x</button>
              </div>
            </div>
          ))}
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
