//CSS imports
import styles from "./header.module.css";

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo(0, 100000);
  };
  return (
    <div className={styles.container__main}>
      <div className={styles.logo}>
        <img
          src="/svgs/assuredsketched.svg"
          alt="sketched company logo of a key and house keychain"
        />
      </div>
      <div className={styles.container__icons}>
        <div className={styles.phone}>
          <a name="telephone link to assured exchange" href="tel:07504688872">
            <img src="/svgs/phone.svg" alt="sketched phone" />
          </a>
        </div>
        <div className={styles.contact}>
          <img
            onClick={scrollToBottom}
            src="/svgs/contact.svg"
            alt="sketched phone"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
