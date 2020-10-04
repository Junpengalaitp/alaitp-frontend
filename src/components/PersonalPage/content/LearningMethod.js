import React from 'react';
import coursera from "../resource/image/coursera.png";
import udemy from "../resource/image/udemy.png";

const LearningMethod = () => (
  <div>
    <div className="row">
      <div className="col-1" />
      <div className="intro-text col-7">
        <p>
          在软件开发中有一个很著名的设计模式：控制反转，含义是底层建筑要依赖高层建筑，而不是高层建筑依赖底层建筑。在一年多以前接触到Spring框架并
          了解了这个模式后，我立马爱上了这个框架，决定在Java和Spring上深入学习。原因是控制反转虽然是个软件开发上的模式，但它的思想和我自身的
          人生观和方法论是高度重合的。
        </p>

        <p>
          控制反转思想在生活里的体现是：我认为想要成为一名优秀的开发者，或者任何职业，首先在最高层次上，你得是一个优秀的人。在高的层面上做到了优秀，
          那么具体到任何的事情上，都能做到优秀。但是反过来，如果仅仅在技术上投入而忽视了其他方面，不一定能成为一个优秀的人。
        </p>

        <p>
          拿学习方面来说，我的学习习惯，时间管理，个人管理能力在我成为开发人员就已经具备了。这些能力相对于具体的开发技术是一个较高层的能力，所以当
          我转行开发后，把这些能力用到了技术的学习和工作上，效果是非常显著的。
        </p>

        <p>
          再具体一点，在我开始认真学习Java时，最先看的一本书并不是关于Java这门语言的。而是《代码整洁之道》这本在高层面介绍如何写出良好代码的书，
          这也是我在学习上使用控制反转这个思想。事实证明，养成良好开发习惯后再去学习具体的开发技术，是事半功倍的。在工作中，进行任何的开发之前，
          我会在高层面上先和业务人员明确好需求，和测试人员讨论将要开发的功能要如何测试，再进行具体的开发。这也是控制反转思想的应用，
          大大减少了出Bug和回炉重造的概率。
        </p>

        <p>
          在高的层面有了优秀的习惯和方法，借助各种工具，想要快速的学习是不困难的。我常用的学习资源有有书籍，Coursera, Udemy, Github, LeetCode
          和YouTube等等。
        </p>

      </div>
      <div className="col-1" />
    </div>

    <div className="row">
      <div className="col-1" />
      <div className="col-7">
        <img src={udemy} alt=""/>
      </div>
    </div>

    <div className="row">
      <div className="col-1" />
      <div className="col-7">
        <img src={coursera} alt=""/>
      </div>
    </div>
  </div>

);

export default LearningMethod;