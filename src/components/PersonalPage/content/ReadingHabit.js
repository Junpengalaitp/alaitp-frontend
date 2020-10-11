import React, {useEffect, useState} from 'react';
import books1 from "../resource/image/books_1.jpg";
import books2 from "../resource/image/books_2.jpg";
import a1 from "../resource/image/audible_1.jpeg";
import a2 from "../resource/image/audible_2.jpeg";
import a3 from "../resource/image/audible_3.jpeg";
import a4 from "../resource/image/audible_4.jpeg";
import a5 from "../resource/image/audible_5.jpeg";
import a6 from "../resource/image/audible_6.jpeg";
import {Fade} from "react-bootstrap";
import {connect} from "react-redux";


const ReadingHabit = props => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true),
    [])
  const textCN = (
    <div>
      <p>我对信息的获取做了三个分类:</p>
      <p>第一类：别人付出金钱想让你知道的：广告和营销。</p>
      <p>第二类：自己付出金钱才能获得的：书籍。</p>
      <p>第三类：不仅自己付出金钱，还需付出努力才能知道的：专业知识。</p>
      <p>这三类信息的质量是递增的，所以我希望获得的信息都是第二类和第三类的。虽然现在从网络获得信息很方便，但我更偏爱从书籍中获得较高质量的信息。</p>
      <p>
        原因有两点，一是每本书自身的各章节构成了一个完整的系统，系统化的知识比碎片化的知识更容易吸收和掌握。二是虽然通过互联网也能获取不少高质量的
        信息， 但是时常伴随着一类信息的干扰。当然，我从互联网获取信息也是很频繁的，不过通过读书培养的系统性思维，能够更好的将互联网上碎片化信息进行
        整合，更高效的利用信息。
      </p>
    </div>
  )

  const textCN_sub = (
    <div className="intro-text col-9 mt-5">
      <p>
        最近一年感觉到读书的质量比数量更重要，好书值得多读几遍，所以开始了记读书笔记，可以在
        <a href="https://github.com/Junpengalaitp/book-reading" target="_blank" rel="noopener noreferrer">GitHub</a>
        上查看我的笔记。
      </p>
      <p>
        为了更好的利用时间，在运动和上下班通勤时，我会用Amazon Audible听有声书。
      </p>
    </div>
  )

  const textEN = (
    <div>
      <p>I summarized three categories of information acquisition:</p>
      <p>The first category: what others want you to know and paying money to do it: advertising and marketing. </p>
      <p>The second category: what you can get by paying for yourself: books.</p>
      <p>The third category: not only pay for yourself but also need to work hard to understand: professional knowledge.</p>
      <p>
        The quality of these three types of information is in increasing order. Hence the information I hope to obtain
        is from the second and third categories. Although it is very convenient to get information from the Internet,
        I prefer higher quality information from books.</p>
      <p>
        There are two reasons. One is that the chapters of each book form a complete knowledge system, and systematic
        knowledge is easier to absorb and master than fragmented knowledge. Secondly, although a lot of high-quality
        information is there on the internet, it is often accompanied by the noise of the first category of information.
        Of course, I get information from the Internet very frequently, but with the systematic thinking cultivated through
        book reading, I can better integrate the fragmented information on the Internet and use them more efficiently.
      </p>
    </div>
  )

  const textEN_sub = (
    <div className="intro-text col-9 mt-5">
      <p>
        In the past year, I feel that the quality of reading is more important than quantity.
        Good books are worth reading several times, so I started to take reading notes. You can check my notes on
        <a href="https://github.com/Junpengalaitp/book-reading" target="_blank" rel="noopener noreferrer"> GitHub</a>.
      </p>
      <p>
        In order to make better use of my time, I also use Amazon Audible to listen to audiobooks during sports and
        commuting to and from get off work.
      </p>
    </div>
  )
  return (
    <div className="row">
      <div className="col-1"/>
      <div className="intro-text col-9">
        <Fade in={open}>
          {props.language === "en" ? textEN : textCN}
        </Fade>
      </div>

      <div className="row">
        <div className="col-1"/>
        <img className="col-5" src={books1} alt=""/>
        <img className="col-5" src={books2} alt=""/>
      </div>

      <div className="col-1"/>
      {props.language === "en" ? textEN_sub : textCN_sub}

      <div className="row">
        <div className="col-1"/>
        <img className="col-3" src={a1} alt=""/>
        <img className="col-3" src={a2} alt=""/>
        <img className="col-3" src={a3} alt=""/>
      </div>
      <div className="row mt-3">
        <div className="col-1"/>
        <img className="col-3" src={a4} alt=""/>
        <img className="col-3" src={a5} alt=""/>
        <img className="col-3" src={a6} alt=""/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language,
  }
};

export default connect(mapStateToProps, null)(ReadingHabit);