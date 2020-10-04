import React, {useEffect, useState} from 'react';
import github from "../resource/image/github_profile.jpeg";
import leetcode from "../resource/image/leetcode_profile.jpeg";
import ImageWithModal from "./ImageWithModal";
import {Fade} from "react-bootstrap";

const CodingPractice = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true),
    [])
  return (
    <div>
      <div className="row">
        <div className="col-1"/>
        <div className="intro-text col-9">
          <Fade in={open}>
            <div>
              <p>我的代码能力提升日常：一是眼前的这个的网页项目。二是LeetCode的算法练习。</p>
              <p>任何事情想成功是没有捷径的，唯有脚踏实地，相信一万小时定律，刻意练习。</p>
            </div>
          </Fade>
        </div>
      </div>

      <div className="row">
        <div className="col-1"/>
        <div className="col-9">
          <ImageWithModal img={github}/>
        </div>
      </div>

      <div className="row">
        <div className="col-1"/>
        <div className="col-9">
          <ImageWithModal img={leetcode}/>
        </div>
      </div>
    </div>

  );
};

export default CodingPractice;