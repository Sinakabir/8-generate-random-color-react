import React, { useEffect, useState } from 'react';
import './Color.css'

const Color = () => {

  const [typeOfColor,setTypeofColor] = useState('hex');
  const [color,setColor] = useState('#000000');

  function randomColorUtility(le){
    return Math.floor(Math.random()*le)
  }

  function handleRandomHexColor(){
  const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let hexcolor = '#';

  for(let i=0 ; i<6 ; i++){
    hexcolor+=hex[randomColorUtility(hex.length)]
  }
  setColor(hexcolor)
  
  }

  function handleRandomRgbColor(){
   const r = randomColorUtility(256);
   const g = randomColorUtility(256);
   const b = randomColorUtility(256);

   setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=>{
 if(typeOfColor==='rgb') handleRandomRgbColor()
 else handleRandomHexColor()
  },[typeOfColor])

  return (
    <div className='container' style={{
      background: color
    }}>
      <button onClick={()=>setTypeofColor('hex')}>Create HEX Color</button>
      <button onClick={()=>setTypeofColor('rgb')}>Create RGB Color</button>
      <button onClick={ typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}> <h1>Generate Random Color</h1></button>
      <div className='color'>
        <h3>{typeOfColor === 'rgb'? 'RGB color': 'HEX color'}</h3>
        <h1>
          {color}
        </h1>
      </div>
    </div>
  )
}

export default Color