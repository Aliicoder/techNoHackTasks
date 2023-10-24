import { useEffect, useReducer, useRef, useState } from 'react'
import './App.css'
//ALI FAHMMI 
//1#TASK
//TeckNoHack
const format_time = (couValue:number):string =>{
  let min:number|string =Math.floor(couValue/60);
  let sec:number|string =Math.floor(couValue - min * 60);
  if(min <10) 
    min = "0" + min;
  if(sec < 10) 
    sec = "0" + sec;
  return `${min}:${sec}`
}
function App() {
  const ref = useRef()
  const [couValue,setCouValue] =useState(0)
  const [start,setStart] =useState(false)
  
  useEffect(() =>{
      const handler = setInterval(()=>{
        if(couValue>0 && start){
          console.log(couValue)
          setCouValue(prev=>prev-1)
        }
      },1000)
      
    return () =>{ clearInterval(handler)}
  },[start,couValue])
  const timerHandler = (e) =>{
    const value =e.target.value;
    const time = String(value).split(":")
    const seconds = +time[0] *60 + +time[1];
    setCouValue(seconds)
  }
  const clinckHandler = (e)=>{
    if(e.target.value === "start"){
      setStart(true)
    }
      
    if(e.target.value === "reset"){
      const value =ref.current.value;
      const time = String(value).split(":")
      const seconds = +time[0] *60 + +time[1];
      setCouValue(seconds)
    }
    if(e.target.value === "stop")
      setStart(false)
  }
  return (
    <>
    <div className='mainGrid'>
      <div className='timerContainer'>
        <div className='setTimer'>
          <div className='setTimerInput'>
            <p style={{color:'red'}}>techNoHack ALI FAHMI 1#task</p>
            <p>set timer value in 00:00 format</p>
            <input
            ref={ref}
            onChange={timerHandler} 
            className='setTimerValue'  
            type="text" defaultValue={"00:00"} />
            <div className='label'></div>
          </div>
        </div>
        <div className='timer'>
          <input className='clock' disabled type="text" value={format_time(couValue)}/>
        </div>
        <div className='opt'>
          <div className="options">
            <button value={"stop"} onClick={clinckHandler}>STOP</button>
            <button value={"start"} onClick={clinckHandler}>START</button>
            <button value={"reset"} onClick={clinckHandler}>RESET</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
