import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div>
     <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
        <span className="orangeText">our contacts </span>
        <span className="primaryText"> easy to contact </span>
        <span className="secondaryText">we always ready to help</span>

<div className="flexCoLstart contactModes">
  {/*first row*/}
  <div className="flexStart row">
    <div className="flexColcenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
           <MdCall size={25}/>
        </div>

        <div className="flexColCenter detail">
          <span className="primaryText">call</span>
          <span>021 123 145 14</span>
        </div>

      </div>
      <div className="flexCenter button">call now</div>
    </div>

    <div className="flexColcenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
           <BsFillChatDotsFill size={25}/>
        </div>

        <div className="flexColCenter detail">
          <span className="primaryText">chat</span>
          <span>021 123 145 14</span>
        </div>

      </div>
      <div className="flexCenter button">chat now</div>
    </div>

  </div>

  <div className="flexStart row">
    <div className="flexColcenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
           < BsFillChatDotsFill size={25}/>
        </div>

        <div className="flexColCenter detail">
          <span className="primaryText">video call</span>
          <span>021 123 145 14</span>
        </div>

      </div>
      <div className="flexCenter button">video call now</div>
    </div>
       {/*fourth mode*/}
    <div className="flexColcenter mode">
      <div className="flexStart">
        <div className="flexCenter icon">
           <BsFillChatDotsFill size={25}/>
        </div>

        <div className="flexColCenter detail">
          <span className="primaryText">chat</span>
          <span>021 123 145 14</span>
        </div>

      </div>
      <div className="flexCenter button">chat now</div>
    </div>

  </div>
</div>

        </div>

                  {/*right*/}
        <div className="c-right">
           <div className="image-container">
            <img src="./contact.jpg" alt="" />
           </div>
        </div>
      </div>
     </section>
    </div>
  )
}

export default Contact
