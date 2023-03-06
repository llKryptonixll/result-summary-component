import React from 'react'

const SummaryParts = (props) => {
  
  const colors = () => {
    if(props.category === "Reaction"){
       return "bg-light_red text-light_red"
    }
    if(props.category === "Memory"){
      return "bg-orangey_yellow text-orangey_yellow"
    }
    if(props.category === "Verbal"){
      return "bg-green_teal text-green_teal"
    }
    if(props.category === "Visual"){
      return "bg-cobalt_blue text-cobalt_blue"
    }
  }

  return (
    <div className={`flex justify-between items-center pl-4 pr-4 bg-opacity-5 h-[60px] rounded-lg ${colors()}`}>
      <div className='flex space-x-2'>
        <img src={props.icon} alt="" />
        <p className='font-bold text-lg'>{props.category}</p>
      </div>

      <div className='flex space-x-1 font-bold'>
        <p className='text-dark_grey_blue'>{props.score}</p>
        <span className='text-gray-500'>/</span>
        <p className='text-gray-500'>100</p>
      </div>
    </div>
  )
}

export default SummaryParts