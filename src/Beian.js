import React from 'react';
import BeiAnImg from "./BeiAn.png"

const BeiAn = () => (
  <div className="rightBottom" style={{"width": "300px", "margin": "0 auto", "padding": "20px 0"}}>
    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34170202000384" style={{
      "display": "inline-block",
      "text-decoration": "none",
      "height": "20px",
      "line-height": "20px"
    }}>
      <img src={BeiAnImg} style={{"float": "left"}}/>
      <p style={{
        "float": "left",
        "height": "20px",
        "line-height": "20px",
        "margin": "0px 0px 0px 5px",
        "color": "#939393"
      }}>
        皖公网安备 34170202000384号
      </p>
    </a>
  </div>
);

export default BeiAn;