'use client'
import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        async function getUsers( ) {
            const usersData = await fetch ('https://jsonplaceholder.typicode.com/users')
            setUsers(await usersData.json())
        }
        getUsers( );
    },
    []
)
  return (
    <>
      <h3 className='text-center text-2xl'>Users List | Fetch data with API </h3>
    { 
        users.map((user) => <h2 key={user.id}>{user.name}</h2>)
     } 
     </>
  )
  
}


export default Users;