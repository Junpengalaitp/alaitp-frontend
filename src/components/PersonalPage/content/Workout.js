import React, {useEffect, useState} from 'react';
import {Fade} from "react-bootstrap";
import {connect} from "react-redux";

const Workout = props => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true),
    [])
  const textCN = (
    <div>
      <p>健康的身体是一切的前提，虽然我比较宅，但我养成了早起运动的习惯，坚持这个习惯对我有这些帮助：</p>
      <p>1. 能够保持一整天的精力充沛，工作更有效率。</p>
      <p>2. 心理上更加坚韧，不易情绪波动，遇到挫折不气馁，遇到挑战不恐惧。</p>
      <p>3. 抑制食欲，保持身材，节省下吃饭和考虑穿着的时间，用来做更重要的事情。</p>
    </div>
  )
  const textEN = (
    <div>
      <p>A healthy body is a prerequisite for everything. Although I am not exactly a fan of outdoor activities, I have
        developed the habit of getting up early and work out. This habit helps me in the following ways:</p>
      <p>1. Can stay energetic throughout the day and work more efficiently.</p>
      <p>2. It grows my mental toughness and keeps my emotional state stable. Makes me not discouraged by setbacks and
        not afraid of challenges.</p>
      <p>3. It suppresses my appetite, keeps me in shape, saves time for eating and thinking about dressing, gives me
        more time for higher priority things.</p>
    </div>
  )
  return (
    <div>
      <div className="row">
        <div className="col-1"/>
        <div className="intro-text col-8">
          <Fade in={open}>
            {props.language === "en" ? textEN : textCN}
          </Fade>
        </div>
      </div>
      <div className="row">
        <div className="col-1"/>
        <div className="col-3">
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/keep_data_1.jpeg"} alt=""/>
        </div>
        <div className="col-3">
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/keep_data_2.jpeg"} alt=""/>
        </div>
        <div className="col-3">
          <img src={"https://frontend-image-bucket-1258989137.cos.ap-nanjing.myqcloud.com/keep_marathon.jpeg"} alt=""/>
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

export default connect(mapStateToProps, null)(Workout);