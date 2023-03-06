import '../index.css'
import React from 'react'

const Result = () => {
  return (
    <div className="bg-gradient-to-b from-light_slate_blue to-light_royal_blue md:rounded-3xl rounded-bl-3xl rounded-br-3xl grid justify-items-center items-center md:row-span-5 row-span-2">
      <p className='md:text-2xl text-xl text-light_lavender'>Your Result</p>

      <div className='bg-gradient-to-b from-violet_blue to-persian_blue md:w-[200px] w-[120px] md:h-[200px] h-[120px] rounded-full grid justify-items-center content-center'>
        <span className='md:text-6xl text-5xl font-extrabold text-white'>76</span>
        <span className='text-light_lavender'>of 100</span>
      </div>

      <div className='grid justify-items-center text-center gap-4'>
        <span className='md:text-4xl text-3xl text-white'>Great</span>
        <p className='lg:w-[60%] w-[90%] text-light_lavender'>
          You scored higher than 65% of
          the People who have taken 
          these tests.
        </p>
      </div>
    </div>
  )
}

export default Result