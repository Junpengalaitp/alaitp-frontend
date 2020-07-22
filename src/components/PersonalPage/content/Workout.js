import React from 'react';
import keepData1 from "../resource/image/keep_data_1.jpg"
import keepData2 from "../resource/image/keep_data_2.jpg"
import keepBadges from "../resource/image/keep_badges.jpg"

const Workout = () => (
  <div>
    <div className="intro-text">
      <p>虽然我不是个爱体育活动的人，但是我有早起运动的习惯，坚持这个习惯对我有这些帮助：</p>
      <p>1.能够保持一整天的精力充沛，工作更有效率。</p>
      <p>2.心理上更加坚韧，不易情绪波动，遇到挫折不气馁，遇到挑战不恐惧。</p>
      <p>3.抑制食欲，保持身材，节省下吃饭和考虑如何穿着的时间用来做更重要的事情。</p>
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