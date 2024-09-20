import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
  <section className="f-warpper">
    <div className="paddings innerWidth flexCenter f-container">
       {/*left side*/}
        <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120} />
        </div>
        {/*right side*/}
        <div className=" flexColStart f-right">
            <span className="primaryText" information></span>
            <span className="secondaryText"> 145 new york,fl 4571,usa</span>

            <div className="flexCenter f-menu">
                <span>property</span>
                <span>services</span>
                <span>product</span>
                <span>about us</span>
            </div>


        </div>
    </div>
  </section>
  )
}

export default Footer
