"use client"
import React, { useState } from 'react'
import TextPressure from './TextPressure'

export default function Main() {
  const [content,setContect]=useState("legitdoc")

  return (
    <div className="h-screen w-310 flex justify-center items-center">
   <div style={{position: 'relative', height: '300px'}}  onClick={()=>{
      setContect((x)=> x=="legitdoc"? "prax" : "legitdoc");

    }}>
  <TextPressure
    text={content}
    flex={true}
    alpha={false}
    stroke={false}
    width={false}
    weight={true}
    italic={true}
    textColor="#3F5EFB"
    strokeColor="#111111"
    minFontSize={72}
    className='text'  
   
  />
</div>
    </div>
  );
}
