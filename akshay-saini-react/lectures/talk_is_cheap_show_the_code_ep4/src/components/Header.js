import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
console.log(LOGO_URL);

const Header = () => {
    const [loginBtnstatus,setLoginBtnStatus] = useState("Login");
    console.log('header re rendered');
    return (
     <div className="header">
          <div className="brand">
             <img src={LOGO_URL} alt="brand.png"></img>
             <span className="brand-text">Eat Good</span>
          </div>
        <div className="navItems">
           <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
             <li>Cart</li>
            <li>  <button className="login-button" onClick= { () => {
              loginBtnstatus === 'Login' ? setLoginBtnStatus('Logout') : setLoginBtnStatus('Login')}}> {loginBtnstatus}</button></li>
           </ul>
        </div>
     </div>
    )
 }

 export default Header;