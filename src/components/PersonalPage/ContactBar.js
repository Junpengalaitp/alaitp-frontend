import React, {useState} from 'react';
import wechat from "./resource/image/wechat.png"
import linkedin from "./resource/image/linkedin.png"
import github from "./resource/image/github.png"
import leetcode from "./resource/image/leetcode.png"
import email from "./resource/image/email.png"
import WechatQRModal from "./WechatQRModal";
import keep from "./resource/image/keep_logo.png"
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import KeepQRModal from "./KeepQRModal";

const ContactBar = () => {
  const [wechatModalShow, setWechatModalShow] = useState(false)
  const [keepModalShow, setKeepModalShow] = useState(false)

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
        show={wechatModalShow}
        onHide={() => setWechatModalShow(false)}/>
      <KeepQRModal
        show={keepModalShow}
        onHide={() => setKeepModalShow(false)}/>
      <div className="btn-group">
        <button type="button" onClick={() => setWechatModalShow(true)}>
          <img src={wechat} alt=""/>
        </button>
        <button type="button" onClick={() => window.open("https://www.linkedin.com/in/junpeng-he")}>
          <img src={linkedin} alt=""/>
        </button>
        <button type="button" onClick={() => window.open("https://github.com/Junpengalaitp")}>
          <img src={github} alt=""/>
        </button>
        <button type="button" onClick={() => window.open("https://leetcode.com/hejp009/")}>
          <img src={leetcode} alt=""/>
        </button>
        <button type="button" onClick={() => setKeepModalShow(true)}>
          <img src={keep} alt=""/>
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