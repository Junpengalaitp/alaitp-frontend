import React from 'react';
import avatar from "./avatar.jpg"
import Image from "react-bootstrap/Image";

const Avatar = () => (
  <div className="mt-5 pt-5">
    <Image src={avatar} className="img-thumbnail" roundedCircle/>
  </div>
);

export default Avatar;