import Link from 'next/link'
import React from 'react'

const Employees = () => {

  return (
    <>
        <h2>This is Employees main folder</h2>
        <ul>
            <li>
                <Link href={'employees/farzeen'}> Farzeen </Link>
            </li>
            <li>
                <Link href={'employees/ali'}> ali </Link>
            </li>
            <li>
                <Link href={'employees/hujaifa'}> hujaifa</Link>
            </li>
        </ul>
    </>
  )
}

export default Employees