import React, { Component } from "react";
import Navbar from "../components/navbar/navbar";
import homeStyles from "./home.module.css";
import janeImg from "../assets/images/jane.jpg";
import hatImg from "../assets/images/girl_hat.jpg";
import manHat from "../assets/images/man_hat.jpg";
import runaway from "../assets/images/runway.jpg";
import commenter1 from "../assets/images/avatar_smoke.jpg";
import { useRef, useEffect, useState } from "react";
import Blog from "../components/card/blog_card";
import Inform from "../components/card/information-card";
import sideInfoGirlAvatar from "../assets/images/avatar_girl2.jpg";
import postImg1 from "../assets/images/bandmember.jpg"
import postImg2 from '../assets/images/workshop.jpg'  
import inspire1 from '../assets/images/inspire1.jpg'
import inspire2 from '../assets/images/inspire2.jpg'
import inspire3 from '../assets/images/inspire3.jpg'
import inspire4 from '../assets/images/inspire4.jpg'
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Footer from "../components/footer/footer";

const Home = () => {
  const infoSection = [
    {
      imgSrc: sideInfoGirlAvatar,
      card_title: "Name",
      card_head_desc:
        "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    },
    {
      card_title: "Popular Posts",
      card : [{
          popularPostImg: commenter1,
          popularPostTitle: "Denim",
          popularPostSubTitle: "Sed mattis nunc",
        },
        {
          popularPostImg: postImg1,
          popularPostTitle: "Denim",
          popularPostSubTitle: "Sed mattis nunc",

        },
        {
          popularPostImg: postImg2,
          popularPostTitle: "Workshop",
          popularPostSubTitle: "Ultricies congue",

        },
        {   popularPostImg: commenter1,
          popularPostTitle: "Trends",
          popularPostSubTitle: "Lorem ipsum dipsum",

        }
      ]
    },
    {
      card_title : "Advertise",
      yourAd: "Your Ad here",
     

    },
    {
      card_title: "Tags",
      tags : [
        {
          one: 'Fashion',
          two:"New York",
          three : 'London',
          four : 'Hats',
          five : 'Trends',
          six : 'Norway',
          seven: 'Sweaters',
          eight : 'Ideas',
          nine : 'Deals',
          ten : 'Accessories',
          eleven : 'News',
          twelve : 'Clothing',
          thirteen : 'Shopping',
          fourteen : 'Jeans'
        }
      ]
    },
    {
      card_title : 'Inspiration',
      inspire : [
        {
          inspire1 : inspire1,
          inspire2 : inspire2,
          inspire3 : inspire3,
          inspire4 : inspire4
        }
      ]
    },
    {
      card_title : 'Follow Me',
      socialIcons : [
        {
          icon1: <ImFacebook2/>,
          icon2: <BsInstagram/>,
          icon3: <FaSnapchat/>,
          icon4: <FaPinterestP/>,
          icon5: <FaTwitter/>,
          icon6 : <FaLinkedinIn/>
        }
      ]
    },
    {
      card_title: 'Subscribe',
      form : [
        {
            formPara : 'Enter your e-mail below and get notified on the latest blog posts.',
            placeholder: 'Enter an Email',
            btnValue : 'Subscribe'
        }
      ]
    }
  ];

  // const check = infoSection[1].card.map((cc)=> popularPostImg={cc.popularPostImg})

  const mapp = infoSection.map((tt) => (
    <Inform
      imgSrc={tt.imgSrc}
      card_title={tt.card_title}
      card_head_desc={tt.card_head_desc}
      // popularPostImg= {tt.card}
      // popularPostTitle={tt.card}
      // popularPostSubTitle={tt.card}
      card={tt.card}
      yourAd = {tt.yourAd}
      tags = {tt.tags}
      inspire = {tt.inspire}
      socialIcons = {tt.socialIcons}
      form = {tt.form}
     
    />
  ));

  return (
    <>
      <Navbar />
      <div className={`container ${homeStyles.home}`}>
        <div className={homeStyles.hero}>
          <div className={homeStyles.hero_header}>
            <h1>JANE BLOGLIFE</h1>
            <h6>
              Welcome to the blog of <span>Jane's world</span>
            </h6>
          </div>
          <div className={homeStyles.img_group}>
            <img src={janeImg} alt="" />
            <div className={homeStyles.img_group_body}>
              <h5>Jane's</h5>
              <h2>FASHION BLOG</h2>
              <h6>
                <button className={homeStyles.subscibe_btn}>SUBSCRIBE</button>
              </h6>
            </div>
          </div>
          <div
            className={`${homeStyles.subscribe_btn_block} ${homeStyles.display_none}`}
          >
            <div className={homeStyles.modal_head}>
              <h2>SUBSCRIBE</h2>
              <div className={homeStyles.modal_close_icon}>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Menu / Close_SM">
                      {" "}
                      <path
                        id="Vector"
                        d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <p>
              Join my mailing list to receive updates on the latest blog posts
              and other things.
            </p>
            <form action="">
              <input type="email" placeholder="Enter e-mail" name="" id="" />
              <input type="button" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
      <div className={`container ${homeStyles.blog_about_grid}`}>
        <div className={homeStyles.blog_sec}>
          <Blog
            title="TITLE HEADING"
            desc="Title description"
            descDate="April 23, 2016"
            imgSrc={hatImg}
            boldStart="More Hats!"
            para="I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
            para2="Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            replies={1}
            commenter_img={commenter1}
            commenter_name="George"
            comment_date="May 3, 2015, 6:32 PM"
            commenter_comment="Great blog post! Following"
          />

          <Blog
            title="TITLE HEADING"
            desc="Title description"
            descDate="May 2, 2016"
            imgSrc={manHat}
            boldStart="Hats!"
            para="The trend this summer is hats for men!"
            para2="Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
            replies={2}
          />

          <Blog
            title="TITLE HEADING"
            desc="Title description"
            descDate="April 7, 2016"
            imgSrc={runaway}
            boldStart="Dont miss!"
            para="The runway in New York City this weekend is gonna be legendary!"
            para2="Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
            replies={3}
          />
        </div>
        <div className={homeStyles.infoSec}>
          {/* <Inform imgSrc={sideInfoGirlAvatar} card_title='Name' card_head_desc="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you." /> */}
          {mapp}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
