import '../index.css'
import React from 'react'
import SummaryParts from './SummaryParts'
import data from "../data.json"

const Summary = () => {
  return (
    <div className='w-[85%] h-[100%] place-self-center grid items-center md:row-span-5 row-span-3'>
        <p className='text-2xl text-dark_grey_blue font-bold'>Summary</p>
        <div className='grid gap-4'>
          {data.map((part, index) => {
            return (
              <SummaryParts 
                key={index} 
                category={part.category}
                icon={part.icon}
                score={part.score}
              />
            )
          })}
        </div>
        <button className='justify-self-start bg-dark_grey_blue hover:bg-gradient-to-b hover:from-light_slate_blue hover:to-light_royal_blue text-white h-[50px] w-full rounded-full'>Continue</button>
    </div>
  )
}

export default Summary