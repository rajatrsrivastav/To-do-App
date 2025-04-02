import React,{useState} from 'react'
import './App.css'
function App() {
  const [text,setText]=useState('')
  const [add,setAdd]=useState([])
  const [del,setDel]=useState('')
  function handleText(event){
    setText(event.target.value)
  }

  function handleClick(){
    const newText= text
    const oldList=[...add,newText]
    setAdd(oldList)
  }
  function HandleCross(index){
    console.log(index)
  }
  return <div className="body">
  <div className="main">
    <p>Pending Tasks</p>
    <div>
    {add.map((val,index)=>{
      if (val!=''){
        return <div  className="task">
        <div className="words">
         <h3 className='display-task'>{val}</h3>
        </div>
         <div className="Buttons"> 
         <button className="complete">Complete</button>
        <button className="cross" onClick={HandleCross}>x</button>
        </div>
        </div> 
      }
      })}
     
      
    </div>
    <div className='search'>
        <input className='addIn' placeholder='Add new Task' onChange={handleText}></input>
        <button className="add" onClick={handleClick}>+</button>
    </div>
  </div>
  </div>
  
}

export default App
