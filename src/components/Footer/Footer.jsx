import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">           
Bizning maqsadimiz barcha uchun <br />
eng yaxshi yashash joyini yaratishdir
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Ma'lumot</span>
          <span className="secondaryText">Тошкент шаҳри, 100000, Осиё кўчаси, 1-уй, «Новомосковская» турар-жой мажмуаси</span>
          <div className="flexCenter f-menu">
            <span>Mulk</span>
            <span>Xizmatlar</span>
            <span>Mahsulot</span>
            <span>Biz Haqqimizda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
