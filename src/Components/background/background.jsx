import s from "./background.module.css";

const Background = () => {
  return (
    <div className={s.container__main}>
      <div className={s.clouds}>
        <img src="/svgs/largeClouds.svg" alt="sketched clouds" />
      </div>
      <div className={s.house}>
        <img src="/svgs/houseOne.svg" alt="a sketched house background" />
      </div>
    </div>
  );
};

export default Background;
