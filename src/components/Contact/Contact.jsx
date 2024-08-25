import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Biz bilan bog'lanish</span>
          <span className="primaryText">Biz bilan bog'lanish oson</span>
          <span className="secondaryText">
          Biz har doim siz uchun eng yaxshi xizmatlarni taqdim etish orqali yordam berishga tayyormiz. Biz ishonamizki, yaxshi yashash sizning hayotingizni yaxshilaydi{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Qo'ng'iroq qiling</span>
                    <span className="secondaryText">+988(90)-000-78-88</span>
                  </div>
                </div>
                <div className="flexCenter button">Hozir qo'ng'iroq qiling</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Suhbat</span>
                    <span className="secondaryText">+988(90)-000-78-88</span>
                  </div>
                </div>
                <div className="flexCenter button">Hozir suhbatlashing</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video qo'ng'iroq</span>
                    <span className="secondaryText">+988(90)-000-78-88</span>
                  </div>
                </div>
                <div className="flexCenter button">Hozir video qo'ng'iroq qiling</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">SMS</span>
                    <span className="secondaryText">+988(90)-000-78-88</span>
                  </div>
                </div>
                <div className="flexCenter button">Hozir SMS yozing</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
