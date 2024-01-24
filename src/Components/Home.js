import './css/home.css'
import React,{useState,useCallback} from 'react'
import { useNavigate } from "react-router-dom";
import brandTag from './nexusmeet-high-resolution-logo-transparent.png'

export default function Home() {
    const [value,setvalue]=useState();
    

    const navigate=useNavigate()

    const handeljoinRomm=useCallback(()=>{
        
    navigate(`/roomPage/${value}`)
            
    },[navigate,value])
  return (
    <>
     <div className='brandDiv'><img className='brandImage' src={brandTag}/></div>
    <div className='homeBody'>
      <h2 className='joinRoom'> JOIN ROOME</h2>

    <div >

        <input className='inputID' type="text" placeholder='Enter Romm Code' value={value} onChange={e=>setvalue(e.target.value)}/>
        <button onClick={handeljoinRomm}>Join</button>
    </div>
    </div>
    </>
  )
}
