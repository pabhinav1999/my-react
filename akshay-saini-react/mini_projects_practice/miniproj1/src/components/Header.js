import React from "react"
import { useState } from "react"

const Header = () => {
  
    const [currentLoginStatus, setCurrentLoginStatus] = useState('Login')
    
    return (
        <div className="header">
        <h1> About </h1>
        <h2> Contact Us</h2>
        <h1> { currentLoginStatus }</h1>
          <button onClick = {
            () => {
                if(currentLoginStatus === 'Login'){
                    setCurrentLoginStatus('Logout')
                }
                else {
                    setCurrentLoginStatus('Login')
                }
            }
          }>
              Toggle 
          </button>  
        </div>
    )
}

export default Header