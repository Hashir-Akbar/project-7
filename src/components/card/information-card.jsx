import React from "react";
import InfoCss from "./information_card.module.css";

const Inform = (props) => {
  const { card, tags, inspire, socialIcons, form } = props;
  

  return (
    <>
      <div className={InfoCss.card}>
        <div className={`${InfoCss.card_head} ${InfoCss.card_head_second}`}>
          {props.imgSrc && <img src={props.imgSrc} alt="Side Image" />}
          <div className={InfoCss.card_head_txt}>
            <h4>{props.card_title}</h4>
            <p>{props.card_head_desc}</p>
          </div>
        </div>

        {!props.imgSrc &&
          Array.isArray(card) &&
          card.map((cc, index) => (
            <div className={InfoCss.card_body} key={index}>
              <div className={cc.popularPostImg && InfoCss.popularPosts}>
                <img src={cc.popularPostImg} alt="" />
                <div>
                  <span>{cc.popularPostTitle}</span>
                  <span>{cc.popularPostSubTitle}</span>
                </div>
              </div>
            </div>
          ))}

        {props.yourAd && (
          <div className={InfoCss.yourAd}>
            <div>{props.yourAd}</div>
          </div>
        )}



       { Array.isArray(tags) && tags.map((cc) => 
        <div className={InfoCss.tags}>
          <div>
            <span>{cc.one}</span>
            <span>{cc.two}</span>
            <span>{cc.three}</span>
            <span>{cc.four}</span>
            <span>{cc.five}</span>
            <span>{cc.six}</span>
            <span>{cc.seven}</span>
            <span>{cc.eight}</span>
            <span>{cc.nine}</span>
            <span>{cc.ten}</span>
            <span>{cc.eleven}</span>
            <span>{cc.twelve}</span>
            <span>{cc.thirteen}</span>
            <span>{cc.fourteen}</span>

          </div>
        </div>

       )} 

      { Array.isArray(inspire) && inspire.map((cc) =>
      
      <div className={InfoCss.inspire}>
         <img src={cc.inspire1} alt="" />
         <img src={cc.inspire2} alt="" />
         <img src={cc.inspire3} alt="" />
         <img src={cc.inspire4} alt="" />

       </div>
      )}


      { Array.isArray(socialIcons) && socialIcons.map((g)=>
      
      <div className={InfoCss.social_icons}>
     
        {g.icon1}
        {g.icon2}
        {g.icon3}
        {g.icon4}
        {g.icon5}
        {g.icon6}

        

      </div>
      )}

       {Array.isArray(form) && form.map((cc=> 
       <div className={InfoCss.form}>
        <p>{cc.formPara}</p>
        <form>
          <input type="text" placeholder={cc.placeholder} />
          <input type="button" value={cc.btnValue} />


        </form>
        </div>
        ))}



          




      </div>
    </>
  );
};

export default Inform;
