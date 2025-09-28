import React from 'react'
import BlurText from './BlurText'
import TextPressure from './TextPressure'

export default function Main() {
  let content = "AI for Demystifying Legal Documents.";

  return (
    <div className="h-screen w-310 flex justify-center items-center">
   <div style={{position: 'relative', height: '300px'}}>
  <TextPressure
    text="legitDoc!"
    flex={true}
    alpha={false}
    stroke={false}
    width={false}
    weight={true}
    italic={true}
    textColor="#3F5EFB"
    strokeColor="#111111"
    minFontSize={72}

   
  />
</div>
    </div>
  );
}
