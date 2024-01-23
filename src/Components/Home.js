
import React,{useState,useCallback} from 'react'

import { useNavigate } from "react-router-dom";

export default function Home() {
    const [value,setvalue]=useState();
    

    const navigate=useNavigate()

    const handeljoinRomm=useCallback(()=>{
        
    navigate(`/roomPage/${value}`)
            
    },[navigate,value])
  return (
    <>
    <div>Home</div>

    <div id="div">

        <input type="text" placeholder='Enter Romm Code' value={value} onChange={e=>setvalue(e.target.value)}/>
        <button onClick={handeljoinRomm}>Join</button>
          
       
       
    </div>
    </>
  )
}
