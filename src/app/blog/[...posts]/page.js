import React from 'react'

const Posts = ({params}) => {
  return (
    <>
    <h1> Blogs {params.posts[0]} </h1>
   
    <h1> Posts {params.posts[1]}</h1>
    </>
  )
}

export default Posts