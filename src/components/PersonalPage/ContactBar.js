import React, {useState} from 'react';
import wechat from "./resource/image/wechat.png"
import linkedin from "./resource/image/linkedin.png"
import github from "./resource/image/github.png"
import leetcode from "./resource/image/leetcode.png"
import email from "./resource/image/email.png"
import WechatQRModal from "./WechatQRModal";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const ContactBar = () => {
  const [modalShow, setModalShow] = useState(false)

  const emailPopover = (
    <Popover id="popover-basic">
      <Popover.Content>
        hejunpeng2012@hotmail.com
      </Popover.Content>
    </Popover>
  );

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
        <button type="button">
          <OverlayTrigger trigger="click" placement="right" overlay={emailPopover}>
            <img src={email} alt=""/>
          </OverlayTrigger>
        </button>
      </div>
    </div>
  )
}

export default ContactBar;