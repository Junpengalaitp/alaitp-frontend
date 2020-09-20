import React from 'react';
import github from "../resource/image/github_profile.jpg";
import leetcode from "../resource/image/leetcode_profile.jpg";

const CodingPractice = () => (
  <div>
    <div className="row">
      <div className="col-1" />
      <div className="intro-text col-9">
        <p>我的代码能力提升日常：一是眼前的这个的网页项目。二是Leetcode的算法练习。</p>
        <p>任何事情想成功是没有捷径的，唯有脚踏实地，相信一万小时定律，刻意练习。</p>
      </div>
    </div>

    <div className="row">
      <div className="col-1" />
      <div className="col-9">
        <img src={github} alt=""/>
      </div>
    </div>

    <div className="row">
      <div className="col-1" />
      <div className="col-9">
        <img src={leetcode} alt=""/>
      </div>
    </div>
  </div>

);

export default CodingPractice;