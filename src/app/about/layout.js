'use client'
import { usePathname } from 'next/navigation';
import React from 'react'

const Layout = ({children }) => {
  const currentPathName = usePathname();
  console.log(currentPathName);
  return (
    <div>
      
       {
        currentPathName !== '/about/company' ? <h2 className='w-25 h-25 bg-purple-500' > side layout </h2> : null 
       }
       {
        children 
       } 

    </div>
  )
}

export default Layout;