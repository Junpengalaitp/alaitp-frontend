import React from 'react';
import zenDoc from "../resource/image/zenDoc.jpg";
import patsTest from "../resource/image/pats_testing.jpg";

const WorkHabit = () => (
  <div className="intro-text">
    <p>工作中，除了高质量完成工作任务，我还主动承担了这两点责任。</p>
    <p>1. 编写自动化测试脚本，帮助快速定位问题，减少测试团队的重复工作。</p>
    <p>2. 记录项目的中英双语文档，帮助产品团队明确功能的需求，记录功能的实现方式。</p>
    <p>3. 主讲公司技术分享会，将好的实现方式，代码规范，算法设计与同事们交流。</p>
    <p>我相信做好这三点比单单完成自身的任务对团队更有帮助，能够将工作从做加法变为做乘法，大大提高团队的效率。并且通过与团队的交流，自身对业务逻辑，
    功能实现的了解会更透彻。
    </p>
    <img className="row" src={patsTest} alt=""/>
    <img className="row" src={zenDoc} alt=""/>
  </div>
);

export default WorkHabit;