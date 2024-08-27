import React from 'react'
import react from "../image/react.png";
import java from "../image/java.png";
import express from "../image/express.png";
import js from "../image/js.png";
import node from "../image/node.png";
import mongo from "../image/mongo.png";
import python from "../image/python.png";

function Portfolio() {
    const greenShadow = {
        boxShadow: '0 6px 8px rgba(0, 255, 0, 0.5)', 
      };
    const cardItem=[
        {
            id:1,
            logo:react,
            name:"React"
        },
        {
            id:2,
            logo:java,
            name:"Java"
        },
        {
            id:3,
            logo:express,
            name:"Express"
        },
        {
            id:4,
            logo:js,
            name:"Java Script"
        },
        {
            id:5,
            logo:node,
            name:"Node JS"
        },
        {
            id:6,
            logo:mongo,
            name:"MongoDB"
        },
        {
            id:7,
            logo:python,
            name:"Python"
        }
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-32 mt-10">
        <div>
            <h1 className="text-4xl font-bold mb-5">Portfolio</h1>
            <div className="grid grid-cols-1 md:space-x-4 ml-20 mt-8 md:mt-8 md:ml-8 md:grid-cols-4">
                {
                    cardItem.map(({id, logo, name})=>(
                        <div className=""key={id}>
                            <img src= {logo} className="w-[190px] h-[190px] md:w-[160px] md:h-[160px] p-1 rounded-full border-[2px] hover:scale-110 transition-transform duration-300" style={greenShadow}></img>
                            <div>
                                <div className="text-2xl font-bold ml-10 mb-6 mt-4 md:mb-12">{name}</div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
