import React, {useEffect, useState} from 'react';
import ImageWithModal from "./ImageWithModal";
import {Fade} from "react-bootstrap";
import {connect} from "react-redux";

const CodingPractice = props => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true),
    [])

  const textCN = (
    <div>
      <p>我的代码能力提升日常：一是眼前的这个的网页项目。二是LeetCode的算法练习。</p>
      <p>任何事情想成功是没有捷径的，唯有脚踏实地，相信一万小时定律，刻意练习。</p>
    </div>
  )

  const textEN = (
    <div>
      <p>My daily coding ability improvement practice: one is the web project showing in front of. The second is LeetCode's algorithm practice.</p>
      <p>There is no shortcut to success in anything, only love the grind, believing in the 10,000-hour rule, and deliberate practice.</p>
    </div>
  )

  return (
    <div>
      <div className="row">
        <div className="col-1"/>
        <div className="intro-text col-9">
          <Fade in={open}>
            {props.language === "en" ? textEN : textCN}
          </Fade>
        </div>
      </div>

      <div className="row">
        <div className="col-1"/>
        <div className="col-9">
          <ImageWithModal img={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/github_profile.jpg"}/>
        </div>
      </div>

      <div className="row">
        <div className="col-1"/>
        <div className="col-9">
          <ImageWithModal img={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/leetcode_profile.jpg"}/>
        </div>
      </div>
    </div>

  );
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language,
  }
};

export default connect(mapStateToProps, null)(CodingPractice);