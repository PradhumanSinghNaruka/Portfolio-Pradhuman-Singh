import React from 'react'

function ProgressBar({ percentage }) {
    return (
      <div name="Experiance" className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{ width: `${percentage}%` }}
        >
        </div>
      </div>
    );
  }
  
  function Percentage() {
    return (
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-32 md:mt-10">
        <h1 className="mb-8 text-4xl font-bold">Experience</h1>
        <h1 className="text-xl font-bold mb-4">HTML 100%</h1>
        <ProgressBar percentage={100} />
        <h1 className="text-xl font-bold mb-4 mt-8">CSS   85%</h1>
        <ProgressBar percentage={85} />
        <h1 className="text-xl font-bold mb-4 mt-8">Java Script 75%</h1>
        <ProgressBar percentage={75} /> 
        <h1 className="text-xl font-bold mb-4 mt-8">Java 80%</h1>
        <ProgressBar percentage={80} /> 
        <h1 className="text-xl font-bold mb-4 mt-8">C++ 75%</h1>
        <ProgressBar percentage={75} /> 
        <h1 className="text-xl font-bold mb-4 mt-8">C 65%</h1>
        <ProgressBar percentage={65} /> 
        <h1 className="text-xl font-bold mb-4 mt-8">Backend(MongoDB, Postman) 75%</h1>
        <ProgressBar percentage={75} /> 
        <h1 className="text-xl font-bold mb-4 mt-8">Python 65%</h1>
        <ProgressBar percentage={65} /> 
      </div>
    );
  }

export default Percentage
