'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function About() {
  let router = useRouter();

  return (
    <div>
        <h4>this is about About</h4>
        {/* <Link href={'/home'} className='bg-amber-400'>home</Link> */}
        <Link className='text-center mx-auto mt-40 ml-40'
         href={'about/company'}> Company </Link>
        <br />
<button  onClick={()=>router.push('about/employee')} className='bg-pink-300 px-4 py-2 m-4 rounded-5 text-center mx-auto mt-44 ml-40'> Employee </button>
    </div>
    
  )
}

export default About