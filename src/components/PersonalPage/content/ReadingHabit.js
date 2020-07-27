import React from 'react';
import books1 from "../resource/image/books_1.jpg";
import books2 from "../resource/image/books_2.jpg";
import a1 from "../resource/image/audiable_1.jpg";
import a2 from "../resource/image/audiable_2.jpg";
import a3 from "../resource/image/audiable_3.jpg";
import a4 from "../resource/image/audiable_4.jpg";
import a5 from "../resource/image/audiable_5.jpg";
import a6 from "../resource/image/audiable_6.jpg";


const ReadingHabit = () => (
  <div className="intro-text">
    <p>虽然现在获得信息很方便，但我还是更偏爱读书。原因有两点，一是每本书自身的各章节构成了一个完整的系统，系统化的知识比碎片化的知识更容易吸收和掌握。
      二是我有对信息获取做了三个总结和分类，第一类：别人付出金钱想让你知道的：广告和营销。第二类：自己付出金钱才能知道的：书籍。第三类：不仅自己付出
      金钱，还需付出努力才能知道的：专业知识。这三类信息的质量是递增的，所以我希望获得的信息都是第二类和第三类的。虽然通过互联网也能获取不少高质量的信息，
      但是时常伴随着第一类信息的干扰，所以我更加偏爱读书。当然，从互联网获取信息也是很频繁的，不过通过读书培养的系统性思维，能够更好的将互联网上碎片化信息进行聚合，
      更高效的利用信息。</p>
    <img className="row" src={books1} alt=""/>
    <img className="row" src={books2} alt=""/>
    <p>在运动和上下班通勤时，我会听有声书，使用的是Amazon的Audiable。</p>
    <img className="row" src={a1} alt=""/>
    <img className="row" src={a2} alt=""/>
    <img className="row" src={a3} alt=""/>
    <img className="row" src={a4} alt=""/>
    <img className="row" src={a5} alt=""/>
    <img className="row" src={a6} alt=""/>
  </div>
);

export default ReadingHabit;