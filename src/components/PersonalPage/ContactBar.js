import React, {useState} from 'react';
import wechat from "./resource/image/wechat.png"
import linkedin from "./resource/image/linkedin.png"
import github from "./resource/image/github.png"
import leetcode from "./resource/image/leetcode.png"
import WechatQRModal from "./WechatQRModal";

const ContactBar = () => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div className="contact-bar">
      <WechatQRModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      <div className="btn-group">
        <button type="button" onClick={() => setModalShow(true)}>
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
  )
}

export default ContactBar;