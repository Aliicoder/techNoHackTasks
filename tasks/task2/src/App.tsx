import { useReducer, useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDivide, faEquals, faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [expression,setExpression] =useState('')
  const clicksHandler =(e)=>{
   setExpression(prev=>prev.concat(e.target.value))
  } 
  const clickHandler =(op:string)=>{
    setExpression(prev=>prev.concat(op))
  }
  const clearHandler = () =>{
    setExpression('')
  }
  const calcHandler = () =>{
    console.log("clicked")
    try{
      const result = eval(expression)
      console.log(result)
      setExpression(String(result))
    }catch(e){
      setExpression("ERROR")
      setTimeout(()=>{
        setExpression('')
      },1000)
    }
  }
  return (
    <>
     <div className='mainGrid'>
      <div className='calculator'>
        <input className='display' 
          defaultValue={expression} disabled type="text" name="" id="" />
        <button
          onClick={()=>clickHandler('+')}
          value={"+"} 
          className='pluse'><FontAwesomeIcon icon={faPlus} /></button>
        <button 
          onClick={()=>clickHandler('-')}
          value={"-"}
          className='minuse'><FontAwesomeIcon icon={faMinus} /></button>
        <button
          onClick={()=>clickHandler('*')}
          value={"*"} 
          className='multiple'><FontAwesomeIcon icon={faXmark} /></button>
        <button 
          onClick={()=>clickHandler('/')}
          value={"/"}
          className='division'><FontAwesomeIcon icon={faDivide} /></button>
        <button
          onClick={clicksHandler}
          value={7}
          className='seven'>7</button>
        <button 
          onClick={clicksHandler}
          value={8}
          className='eight'>8</button>
        <button 
          onClick={clicksHandler}
          value={9}
          className='nine'>9</button>
        <button 
          onClick={clicksHandler}
          value={4}
          className='four'>4</button>
        <button 
          onClick={clicksHandler}
          value={5}
          className='five'>5</button>
        <button 
          onClick={clicksHandler}
          value={6}
          className='six'>6</button>
        <button 
          onClick={clicksHandler}
          value={1}
          className='one'>1</button>
        <button
          onClick={clicksHandler}
          value={2} 
          className='two'>2</button>
        <button 
          onClick={clicksHandler}
          value={3}
          className='three'>3</button>
        <button 
          onClick={clicksHandler}
          value={0}
          className='zero'>0</button>
        <button
          onClick={clicksHandler}
          value={"."}
          className='dot'>.</button>
        <button 
          onClick={clearHandler}
          value={"clear"}
          className='clear'>CE</button>
        <button 
          onClick={calcHandler}
          value={"="}
          className='equal'><FontAwesomeIcon icon={faEquals} /></button>
      </div>
     </div>
    </>
  )
}

export default App
