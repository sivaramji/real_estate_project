import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'


const Header = () => {
  const [menuOpened , setMenuOpened] = useState(false)
  return (

    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth   h-container">
            <img src="./logo.png" alt="logo" width={100} />
            <div className="flexCenter h-menu">
                <a href="">residency</a>
                <a href="">our value</a>
                <a href="">contact us</a>
                <a href="">get started</a>
                <button className="button">
                <a href="">contact </a>
                </button>
            </div>
            <div className="menu-icon"onClick={()=>setMenuOpened((prev)=>!prev)} >
          <BiMenuAltRight size={30}/>
        </div>
        </div>
        
    </section>
  )
}

export default Header
 