import React from 'react'
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
const MarqueeContent = styled.div`
  display: inline-block;
  padding-left: 100%;
  animation: ${marquee} 10s linear infinite;
`;


function Marquee() {
  return (
    // <div className="space-x-4 space-y-4 marquee-container">
    //     <div className="marquee-container flex">
    //         <h1 className="text-8xl font-bold text-white">Website Made By</h1> 
    //         <span className="text-8xl font-bold text-green-500">Pradhuman Singh Naruka</span>
    //     </div>
    // </div>
    <MarqueeContainer>
      <MarqueeContent className="flex items-center mb-24 mx-auto px-4 md:px-20 my-32 mt-2">
        <h1 className="text-6xl md:text-8xl font-bold text-white">Website Made By <span className="text-6xl md:text-8xl font-bold text-green-500"> Pradhuman Singh Naruka</span></h1>
        
      </MarqueeContent>
    </MarqueeContainer>
  )
}

export default Marquee
