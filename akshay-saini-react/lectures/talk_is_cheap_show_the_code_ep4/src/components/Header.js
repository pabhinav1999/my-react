import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
           </ul>
        </div>
 
     </div>
    )
 }

 export default Header;