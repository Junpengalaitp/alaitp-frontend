import React from 'react';
import coursera from "../resource/image/coursera.png";
import udemy from "../resource/image/udemy.png";

const LearningMethod = () => (
  <div>
    <div className="intro-text">
      <p>成为一名优秀的开发人员少不了快速学习的能力，快速学习需要高效的时间利用率。我的学习方式可以总结为三个步骤：明确目标，制定计划，严格执行。</p>
      <p>第一步：明确目标。最重要的一步，弄清楚哪些是需要学习的，避免浪费时间在对问题解决没有帮助的知识。</p>
      <p>第二步：制定计划。当目标确定后，选择合适学习资源，我常用的资源有书籍，Coursera, Udemy, YouTube和Github等。然后根据学习资源的量制定每日计划和完成时间。</p>
      <p>第三部：严格执行。每天严格的把一块时间分配给学习。我的学习时间是每天早上晨跑后到上班之间的一小时。下班之后到入睡前的两小时。周末会对一周的学习进行复习和巩固，并且制定下周的学习计划.</p>
    </div>
    <div className="row">
      <div className="col-4">
        <img src={coursera} alt=""/>
      </div>
      <div className="col-4">
        <img src={udemy} alt=""/>
      </div>
    </div>
  </div>

);

export default LearningMethod;