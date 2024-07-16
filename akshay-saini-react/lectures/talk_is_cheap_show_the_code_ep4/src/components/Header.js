import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
console.log(LOGO_URL);

const Header = () => {

   const [loginBtn, setLoginBtn] = useState('Login');

   console.log('header reloaded');
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
             <li><button className="loginButton" onClick={() => {
                  loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('LogIn');
             }}> {loginBtn}</button>
             </li>
           </ul>
        </div>
 
     </div>
    )
 }

 export default Header;