import React from 'react';
import avatar from "./resource/image/avatar.jpg"

const Avatar = props => {
  let style;
  if (props.location === "sideNav") {
    style = "mt-5 pt-5 avatar";
  } else {
    style = "mt-0 pt-5 avatar-modal";
  }
  return (
    <div className={style}>
      <img src={avatar} alt="" className="img-thumbnail img-avatar"/>
    </div>
  )
}

export default Avatar;