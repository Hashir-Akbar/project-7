import React from "react";
import InfoCss from './information_card.module.css'


const Inform = (props) => {

  return (
    <>
      <div className={InfoCss.card}>
        <div className={InfoCss.card_head}>
          <img src={props.imgSrc} alt="" />
          <div className={InfoCss.card_head_txt}>
            <h4>{props.card_title}</h4>
            <p>{props.card_head_desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inform;