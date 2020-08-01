import React from 'react';
import kanbanFlow from "../resource/image/kanbanFlowEn.png";

const TimeManagement = () => (
  <div className="intro-text">
    <p>我相信时间管理是个人能力最重要的一点，每个人的时间都是有限的，所以想提高效率，必须提高时间利用率。在我看来，像年月这种时间太长的单位没有意义，
      想达成一个目标，关键是看有多少小时的专心投入，所以我在时间管理上，会把每件事情投入的小时数规划好。具体做法是我会使用时间管理工具，根据阶段性目标，
      规划好每件事需要投入的小时数，严格按照计划进行。
    </p>
    <img src={kanbanFlow} alt=""/>
  </div>
);

export default TimeManagement;