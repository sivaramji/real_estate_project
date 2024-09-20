import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css';
import data from '../../utils/accordion';
const Value = () => {
  return (
   <section className="v-wrapper">
    <div className="paddings innerWidth flexCenter v-container">
        {/*left side*/}
        <div className="v-left">
            <div className="image-container">
            <img src="./value.png" alt="" />
            </div>
        </div>
        {/*right side*/}
        <div className="flexColStart v-right">
            <span className="orangeText" >our value</span>
            <span className="primaryText">we always ready to help you</span>
            <span className="secondaryText">we believe a good palce to live is <br />
            the good plac e to eat</span>
         
         <Accordion className="accordion"
         alowMultipleExpanded={false}
         preExpanded={[0]} >
              {
                data.map((item,i) =>{
                    const [className,setClassName]=useState(null)
                    return(
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                        <AccordionItemHeading>
                            <AccordionItemButton className=" flexCenter accordionButton" >
                             <AccordionItemState>
                                {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                
                             </AccordionItemState>

                                <div className="flexCenter icon">{item.icon}</div>
                                <span className="primaryText">{item.heading}</span>
                                <div className="flexCenter icon">
                                    <MdOutlineArrowDropDown size={20}/>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>


                        </AccordionItem>
    

                    )
                })
              }
         </Accordion>

        </div>
    </div>
   </section>
  )
}

export default Value
