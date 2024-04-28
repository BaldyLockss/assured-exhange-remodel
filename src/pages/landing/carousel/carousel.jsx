import s from "./carousel.module.css";
import { useEffect, useState } from "react";

function Carousel(props) {
  const [location, setLocation] = useState(0);

  const leftArrowHandler = () => {
    if (location < 1) return;

    setLocation((prevState) => prevState - 1);
  };

  const rightArrowHandler = () => {
    if (location < props.data.length - 1) {
      setLocation((prevState) => prevState + 1);
    } else {
      setLocation(0);
    }
  };

  const iconHandler = (i) => {
    setLocation(i);
  };

  const mouseOver = (i) => {
    setLocation(i);
  };

  //   useEffect(() => {
  //     const timer = 4000;

  //     const interval = setInterval(() => {
  //       if (location < props.data.length - 1) {
  //         setLocation((prevState) => prevState + 1);
  //       } else {
  //         setLocation(0);
  //       }
  //     }, timer);

  //     return () => clearInterval(interval);
  //   });

  return (
    <div className={s.container}>
      <div className={s.arrow}>
        <button onClick={leftArrowHandler}>
          <img src="/svgs/arrow.svg" alt="left arrow" />
        </button>
      </div>
      <div className={s.container__slide}>
        <ul
          className={s.slides}
          style={{
            width: `${props.data.length * 100}%`,
            transform: `translateX(-${(location * 100) / props.data.length}%)`
          }}
        >
          {props.data.map((item, i) => {
            return (
              <li className={s.slide} key={i} onmouseover={(i) => mouseOver(i)}>
                <div className={s.slide__text}>
                  <h3>{item.title}</h3>
                  <p>{item.info}</p>
                </div>
                <div className={s.img__container}>
                  <div
                    className={s.images}
                    style={{
                      width: `${item.img.length * 100}%`
                    }}
                  >
                    {item.img.map((img, i) => {
                      return <img key={i} src={img.src} alt={img.alt} />;
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.arrow}>
        <button onClick={rightArrowHandler}>
          <img src="/svgs/arrow.svg" alt="left arrow" />
        </button>
      </div>
      <ul className={s.indicators}>
        {props.data.map((__, i) => {
          return (
            <li
              className={s.indicator}
              key={i}
              style={{ opacity: i === location ? "1" : "0.5" }}
              onClick={() => iconHandler(i)}
            >
              <img src="/svgs/slideimage.svg" alt="sketched house icon" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Carousel;
