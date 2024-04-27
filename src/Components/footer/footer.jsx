//CSS imports
import styles from "./footer.module.css";
//REACT imports
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <footer className={styles.container}>
      <div className={styles.main__section}>
        <div className={styles.logo}>
          <img src="/svgs/assuredlogo.svg" alt="corporate company logo" />
        </div>
        <div className={styles.footer__body}>
          <div className={styles.navigation__list}>
            <h2>Navigate</h2>
            <ul>
              <li>
                <a href="#sell">Selling your home</a>
              </li>
              <li>
                <a href="#buy">Cash buyer opportunities</a>
              </li>
              <li>
                <Link to="/faq">FAQ's</Link>
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h2>Contact</h2>
            <ul>
              <li>
                <a name="telephone link" href="tel:07827995311">
                  Tel: 07827995311
                </a>
              </li>
              <li>
                <a name="email link" href="mailto:info@assuredexchange.co.uk">
                  Email:info@assuredexchange.co.uk
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h2>Social</h2>
            <ul>
              <li>
                <div className={styles.icon}>
                  <a
                    name="facebook link"
                    href="https://www.facebook.com/profile/.php?id=100076463592285"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/svgs/Facebook.svg" alt="facebook logo" />
                  </a>
                </div>
              </li>
              <li>
                {/* <div className={styles.icon}>
                  <img src="/svgs/x.svg" alt="x website logo" />
                </div> */}
              </li>
              <li>
                {/* <div className={styles.icon}>
                  <img src="/svgs/instagram.svg" alt="instagram logo" />
                </div> */}
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.image__a}>
            <img
              src="/images/HMRC.png"
              alt="his majestys customs and revenue logo"
            />
          </div>
          <div className={styles.image__b}>
            <img
              src="/images/ICO.png"
              alt="information commissioners office logo"
            />
          </div>
          <div className={styles.image__c}>
            <img src="/images/PRS.png" alt="property redress scheme logo" />
          </div>
        </div>
      </div>

      <div className={styles.compliance}>
        <p>
          Assured Exchange Property Solutions limited 2024 I All Rights Reserved
          I Company Registration:15533962
        </p>
        <p>
          Copyright © 2024 All rights Reserved. | Website Development by Anthony
          P Reilly
        </p>
      </div>
    </footer>
  );
};

export default Footer;
