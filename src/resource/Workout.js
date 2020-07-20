import React from 'react';
import keepData1 from  "./image/keep_data_1.jpg"
import keepData2 from  "./image/keep_data_2.jpg"
import keepBadges from  "./image/keep_badges.jpg"

const Workout = () => (
  <div>
    <div className="row">
      <p className="intro-text">我有早起运动的习惯，以保持精力充沛的状态。</p>
    </div>
    <div className="row">
      <div className="col-3">
        <img src={keepData1} alt=""/>
      </div>
      <div className="col-3">
        <img src={keepData2} alt=""/>
      </div>
      <div className="col-3">
        <img src={keepBadges} alt=""/>
      </div>
    </div>
  </div>

);

export default Workout;