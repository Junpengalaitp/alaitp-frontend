import React from 'react';
import books1 from "../resource/image/books_1.jpg";
import books2 from "../resource/image/books_2.jpg";
import a1 from "../resource/image/audible_1.jpg";
import a2 from "../resource/image/audible_2.jpg";
import a3 from "../resource/image/audible_3.jpg";
import a4 from "../resource/image/audible_4.jpg";
import a5 from "../resource/image/audible_5.jpg";
import a6 from "../resource/image/audible_6.jpg";


const ReadingHabit = () => (
  <div className="row">
    <div className="col-1" />
    <div className="intro-text col-9">
      <p>我对信息的获取做了三个分类:</p>
      <p>第一类：别人付出金钱想让你知道的：广告和营销。</p>
      <p>第二类：自己付出金钱才能知道的：书籍。</p>
      <p>第三类：不仅自己付出金钱，还需付出努力才能知道的：专业知识。</p>
      <p>这三类信息的质量是递增的，所以我希望获得的信息都是第二类和第三类的。虽然现在获得信息很方便，但我更偏爱读书。</p>
      <p>原因有两点，一是每本书自身的各章节构成了一个完整的系统，系统化的知识比碎片化的知识更容易吸收和掌握。二是虽然通过互联网也能获取不少高质量的信息，
        但是时常伴随着一类信息的干扰，所以我更加偏爱读书。当然，我从互联网获取信息也是很频繁的，不过通过读书培养的系统性思维，
        能够更好的将互联网上碎片化信息进行整合，更高效的利用信息。</p>
    </div>

    <div className="row">
      <div className="col-1" />
      <img className="col-5" src={books1} alt=""/>
      <img className="col-5" src={books2} alt=""/>
    </div>
    <div className="intro-text row mt-5">
      <div className="col-1" />
      <div className="col-9">
        <p>为了更好的利用时间，在运动和上下班通勤时，我会听有声书，使用的是Amazon的Audible，既获取了知识，也保证了每天有英文环境，在国内生活工作英语不拉下。</p>
      </div>
    </div>
    <div className="row">
      <div className="col-1" />
      <img className="col-3" src={a1} alt=""/>
      <img className="col-3" src={a2} alt=""/>
      <img className="col-3" src={a3} alt=""/>
    </div>
    <div className="row mt-3">
      <div className="col-1" />
      <img className="col-3" src={a4} alt=""/>
      <img className="col-3" src={a5} alt=""/>
      <img className="col-3" src={a6} alt=""/>
    </div>
  </div>
);

export default ReadingHabit;