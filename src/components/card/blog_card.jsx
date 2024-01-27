import React from "react";
import blogStyle from './blog_card.module.css'
import { BiSolidLike } from "react-icons/bi";
import propTypes from 'prop-types'

const Blog = (props) => {

  return (
    <>
      <div className={blogStyle.card}>
        <div className={blogStyle.card_header}>
          <h3>{props.title}</h3>
          <h5>{props.desc}, {props.descDate}</h5>
        </div>
        <div className={blogStyle.card_body}>
          <img src={props.imgSrc} alt="blog-img" />
          <p><span className={blogStyle.boldStart}>{props.boldStart}</span> {props.para}</p>
          <p>{props.para2}</p>
        </div>

        <div className={blogStyle.card_footer}>
          <button><BiSolidLike />Like</button>
          <button>Replies <span className={blogStyle.replies}>{props.replies}</span></button>
        </div>



        <div className={props.commenter_img && blogStyle.comments} >
          {props.commenter_img && <img src={props.commenter_img} alt="commenter profile picture" />} <div className={blogStyle.commenter_details}>
            {props.commenter_img && <h4>{props.commenter_name} <span className={blogStyle.comment_date}>{props.comment_date}</span></h4>}
            <p>{props.commenter_comment}</p>
          </div>

        </div>


      </div >

    </>
  )
}

Blog.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
  descDate: propTypes.string,
  imgSrc: propTypes.string,
  boldStart: propTypes.string,
  para: propTypes.string,
  para2: propTypes.string,
  replies: propTypes.number,
  commenter_img: propTypes.string,
  commenter_name: propTypes.string,
  comment_date: propTypes.string,
  commenter_comment: propTypes.string
}

export default Blog;