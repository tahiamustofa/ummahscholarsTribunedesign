'use client'
import React from 'react'

const Employees = ({ params }) => {
    console.log(params)
  const { details } = React.use(params)  // Promise resolve হচ্ছে এখানে
 
  return (
    <>
      <h2 className='bg-red-200 p-2'>
        This is { details } Here !!!!!!!!!!!!!!!!
      </h2>
    </>
  )
}

export default Employees
