import React from 'react'
import { useState } from "react"

const User = (props) => {

  const [ count1 ] = useState(0);
  const [ count2 ] = useState(1);

  console.log(props, 'from functional')
  const { name, location } = props
  return (
    <div className="userContainer">
        <h1> Count1: {count1} </h1>
        <h1> Count2: {count2} </h1>
        <h3> { name }</h3>
        <h4> { location } </h4>
        <h5> Software Engineer </h5>  
    </div>
  )
}

export default User