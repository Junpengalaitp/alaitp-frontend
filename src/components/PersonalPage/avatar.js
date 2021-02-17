import React from 'react';

const Avatar = props => {
  let style;
  if (props.location === "sideNav") {
    style = "mt-5 pt-5 avatar";
  } else {
    style = "mt-0 pt-5 avatar-modal";
  }
  return (
    <div className={style}>
      <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/avatar.jpg"} alt="" className="img-thumbnail img-avatar"/>
    </div>
  )
}

export default Avatar;