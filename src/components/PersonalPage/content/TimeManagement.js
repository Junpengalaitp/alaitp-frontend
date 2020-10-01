import React from 'react';
import kanbanFlow from "../resource/image/kanbanFlowEn.jpeg";

const TimeManagement = () => (
  <div className="intro-text">
    <div className="row">
      <div className="col-1" />
      <div className="col-8">
        <p>
          每个人的时间都是有限的，所以要达成目标、提高效率，时间管理是最重要的一个能力。在采取行动之前制定计划，是时间管理的第一步。
          计划制订得越周密，越容易克服拖延、迅速行动、保持行动的状态。
        </p>
        <p>
          我会时间管理工具，对短期、中期、长期目标做出规划，计算好每件事需要投入的小时数，严格按照计划进行。
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-1" />
      <div className="col-8">
        <img src={kanbanFlow} alt=""/>
      </div>
    </div>
  </div>
);

export default TimeManagement;