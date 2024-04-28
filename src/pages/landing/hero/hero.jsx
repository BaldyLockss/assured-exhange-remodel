import React from "react";
import s from "./hero.module.css";
import Background from "../../../Components/background/background";

const Hero = (props) => {
  return (
    <>
      <main className={s.container}>
        <Background />
        <div className="wrapper">
          <div className={s.container__text}>
            <div className={s.text}>
              <h1>assured exchange</h1>
              <p>
                The simple, friendly and hassle-free way to sell your home
                today.
              </p>
              <ul>
                {props.data.items.map((item, i) => {
                  return (
                    <li key={i}>
                      <img
                        src="/svgs/tick.svg"
                        alt="a sketched tick encompased in a circle"
                      />
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className={s.enquire}>
                <p>Enquire now for your free valuation</p>
                <div className={s.btn__container}>
                  <img
                    src="/svgs/Button.svg"
                    alt="sketche of a rectangle background roughly coloured in"
                  />
                  <button>
                    <a
                      name="link to customer form"
                      href="https://podio.com/webforms/29434708/2417753"
                    >
                      Get offer
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.socials}>
          <a
            name="facebook link"
            href="https://www.facebook.com/profile/.php?id=100076463592285"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/svgs/Facebook.svg" alt="sketch of the facebook logo" />
          </a>
          <a href="">
            <img src="/svgs/x.svg" alt="sketch of the x logo" />
          </a>
          <a href="">
            <img src="/svgs/instagram.svg" alt="sketch of the instagram logo" />
          </a>
        </div>
      </main>
    </>
  );
};

export default Hero;
