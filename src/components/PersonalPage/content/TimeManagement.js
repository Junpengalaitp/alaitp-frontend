import React, {useEffect, useState} from 'react';
import kanbanFlow from "../resource/image/kanbanFlowEn.jpeg";
import ImageWithModal from "./ImageWithModal";
import {Fade} from "react-bootstrap";
import {connect} from "react-redux";

const TimeManagement = props => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true),
    [])

  const textCN = (
    <div>
      <p>
        每个人的时间都是有限的，所以要达成目标、提高效率，时间管理是最重要的一个能力。在采取行动之前制定计划，是时间管理的第一步。
        计划制订得越周密，越容易克服拖延、迅速行动、保持行动的状态。
      </p>
      <p>
        我会时间管理工具，对短期、中期、长期目标做出规划，计算好每件事需要投入的小时数，严格按照计划进行。
      </p>
    </div>
  )
  const textEN = (
    <div>
      <p>
        Time is a limited resource for everyone, and to achieve goals and improve productivity, time management is the
        most important skill. Making a plan before taking action is the first step in time management. The more detailed
        plan it is, the easier I will be to overcome procrastination, act quickly, and stay proactive.
      </p>
      <p>
        I use time management tools to make plans for short-term, mid-term, and long-term goals, calculate the number of
        hours required for every step, and proceed with the plan strictly.
      </p>
    </div>
  )
  return (
    <div className="intro-text">
      <div className="row">
        <div className="col-1"/>
        <div className="col-8">
          <Fade in={open}>
            {props.language === "en" ? textEN : textCN}
          </Fade>
        </div>
      </div>
      <div className="row">
        <div className="col-1"/>
        <div className="col-8">
          <ImageWithModal img={kanbanFlow}/>
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

export default connect(mapStateToProps, null)(TimeManagement);