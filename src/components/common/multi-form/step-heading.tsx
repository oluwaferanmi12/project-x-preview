import React from 'react'

export const StepHeading = ({alphaNum, heading} : {alphaNum: string, heading: string}) => {
  return (
    <div className='flex gap-2 mb-5'>
       <h1 className='text-primary text-lg font-bold'> <span className='text-secondary'>{alphaNum}.</span>  {heading}</h1>
    </div>
  )
}
