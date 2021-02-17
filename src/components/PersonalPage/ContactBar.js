import React, {useState} from 'react';
import WechatQRModal from "./WechatQRModal";
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
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/wechat.png"} alt=""/>
        </button>
        <button type="button" onClick={() => window.open("https://www.linkedin.com/in/junpeng-he")}>
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/linkedin.png"} alt=""/>
        </button>
        <button type="button" onClick={() => window.open("https://github.com/Junpengalaitp")}>
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/github.png"} alt=""/>
        </button>
        <button type="button" onClick={() => window.open("https://leetcode.com/hejp009/")}>
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/leetcode.png"} alt=""/>
        </button>
        <button type="button" onClick={() => setKeepModalShow(true)}>
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/keep_logo.png"} alt=""/>
        </button>
        <button type="button">
          <OverlayTrigger trigger="click" placement="right" overlay={emailPopover}>
            <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/email.png"} alt=""/>
          </OverlayTrigger>
        </button>
      </div>
    </div>
  )
}

export default ContactBar;