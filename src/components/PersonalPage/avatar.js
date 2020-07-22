import React from 'react';
import avatar from "./resource/image/avatar.jpg"

const Avatar = () => (
  <div className="mt-5 pt-5 avatar">
    <img src={avatar} alt="" className="img-thumbnail img-avatar"/>
  </div>
);

export default Avatar;