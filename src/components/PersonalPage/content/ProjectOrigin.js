import React, {useEffect, useState} from 'react';
import {Fade} from "react-bootstrap";
import {connect} from "react-redux";

const ProjectOrigin = props => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true),
    [])

  const textCN = (
    <div>
      <p>
        我为什么会做这个项目，有以下几点原因。
      </p>

      <p>
        第一点，我认为优秀的开发者不仅能写好代码，还要有产品头脑，具备产品设计方面的知识，能做出一个有用，易用，给用户带来价值的产品。
        并且熟悉产品的生命周期，从设计，开发，测试到上线的过程都有所掌握。这个网站就是基于这个想法，结合我个人自学技术的经历所产生的。
      </p>

      <p>
        万事开头难，在我开始自学编程和开发时，不知道从什么技术开始学起，我身边的同学朋友也没有做技术的，没有人可以去问，所以就想到让招聘市场来决定，
        市场中最需要哪些技术，我就学哪些。我是金融专业的，做技术去金融科技行业应该成功率是最高的，所以我就浏览了大量金融科技行业招聘的工作描述，
        从中寻找和总结哪些编程语言，框架、库和技术栈出现的频率最高，然后专心学习这些技术。实践证明这个方法是很有效的，所以当我想做出一个产品时，
        我回想起当时从海量招聘信息里寻找的费时费力，就想到用技术把这个过程自动化，做出一个高效、易用的产品。
      </p>

      <p>
        第二点，我相信产品驱动技术，这点不仅在工作中适用，在提升个人技术水平的过程中也是适用的。有了这个项目，每想实现一个新功能，都会驱动我去学习
        相关的技术和实现方式。相比纯粹的技术学习，这种学习方式是更加高效的。即使在纯技术学习的过程中，当了解到了一些更好的算法、设计模式或实现方式
        时，在工作中往往由于各种限制不能立刻用到现有的代码里，但是可以立刻用到这个项目上，实时得到反馈，大大提高了学习的效率。
      </p>

      <p>
        第三点，有了个人网站，可以帮助猎头和面试官们更好的了解我。企业招聘中都想找到合适的人才，但是仅从一纸简历上并不能完全了解一个人，简历的同质
        化也比较严重。企业招聘不是一件简单的事情，即使有着科学、严格的面试流程，也不一定100%保证达到预期的效果。并且比起错误的否定一个候选人，
        更严重的问题的是错误肯定：有些候选人可能在面试中表现的很好，实际工作中不一定做的好。这是因为在面试中，有些问题的答案是可以快速习得的，
        而优秀的品质则需要长期的的坚持与磨练，在短时间的面试中很难评估出来。
      </p>

      <p>
        接下来的页面就是我个人生活，学习和工作习惯的展示，希望可以帮助到你们更全面的了解我。
      </p>
    </div>
  )

  const textEN = (
    <div>
      <p>
        There are several reasons why I built this project.
      </p>
      <p>
        The first point, I believe that a good developer not only writes good code but also has knowledge of products,
        capable of building a useful, easy-to-use product that brings value to users. And be familiar with the product life cycle,
        including design, development, testing, and deployment process. This App is based on this idea and my personal
        self-learning experience of programming.
      </p>
      <p>
        Everything is difficult at the beginning. When I started to learn programming and development by myself, I didn’t
        know which technology to start with. No friends and classmates around me are programmers. I have nobody to ask
        for experience, so I thought of letting the job market decide. I will start with technologies that are most
        demanded in the market. And I have a financial background, I should have the highest chance of finding a programmer
        job in the fintech industry, so I browsed a lot of job descriptions in the fintech industry to find and summarize
        which programming languages, frameworks, libraries, and technology stacks appear most frequently, and then
        concentrate on learning these technologies. This method turns out very effective, so when I want to create a product,
        I recalled the time-consuming and laborious manual search from the massive recruitment information at the time
        and thought of automating this process with technology to make an efficient and easy-to-use product.
      </p>
      <p>
        The second reason is that I believe technologies should be driven by products. This is not only applicable in
        the work field, but also in the process of improving technical skills. With this project, every time I want to
        implement a new function, it will drive me to learn related technologies and implementation methods. Comparing
        with purely technical learning, this learning method is more efficient. Even in the process of purely technical
        learning, when I learn about some better algorithms, design patterns, or implementations, they cannot be applied
        to the existing codebase immediately at work due to various restrictions. But they can be applied to this project
        immediately, and I can have real-time feedback, which greatly improves the efficiency of learning.
      </p>
      <p>
        Thirdly, having a personal website can help recruiters and interviewers to know me better. In corporate recruitment,
        the most fitting talents are always desired, but only reading resume can’t fully know a candidate. Recruiting is
        not a simple task,  even with a scientific and rigorous interview process, it is not necessarily 100% guaranteed
        to achieve the expected results. And comparing to falsely denying a candidate, the more serious problem is the
        false positive: some candidates may perform very well in interviews, but may not perform well in actual work.
        This is because in the interview, the answers to some questions can be learned quickly, and some great quality
        requires long-term persistence and practice, which is difficult to evaluate in a short interview.
      </p>

      <p>
        The next sections are displays of my personal life, study, and work habits. I hope it can help you know me more comprehensively.
      </p>
    </div>
  )

  return (
  <div className="row">
    <div className="col-1"/>
    <div className="intro-text col-8">
      <Fade in={open}>
        {props.language === "en" ? textEN : textCN}
      </Fade>
    </div>
  </div>)
}

const mapStateToProps = state => {
  return {
    language: state.i18n.language,
  }
};

export default connect(mapStateToProps, null)(ProjectOrigin);