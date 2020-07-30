import React from 'react';
import wechat from "./resource/image/wechat.png"
import linkedin from "./resource/image/linkedin.png"
import github from "./resource/image/github.png"
import leetcode from "./resource/image/leetcode.png"

const ContactBar = () => (
  <div className="contact-bar">
    <div className="btn-group">
      <button type="button">
        <img src={wechat} alt=""/>
      </button>
      <button type="button">
        <img src={linkedin} alt="https://www.linkedin.com/in/junpeng-he"/>
      </button>
      <button type="button">
        <img src={github} alt=""/>
      </button>
      <button type="button">
        <img src={leetcode} alt=""/>
      </button>
    </div>
  </div>
);

export default ContactBar;