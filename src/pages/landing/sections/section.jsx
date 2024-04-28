import s from "./section.module.css";

function Section(props) {
  const sectionClass = props.reverse
    ? `${s.container} ${s.reverse}`
    : `${s.container}`;

  return (
    <>
      <main className={sectionClass} id={props.data.id}>
        <div className={s.text}>
          <h2>{props.data.title}</h2>
          {props.data.information.map((para, i) => {
            return (
              <div key={i}>
                <p>{para}</p>
              </div>
            );
          })}
          <div className={s.btn__container}>
            <img
              src="/svgs/Button.svg"
              alt="sketche of a rectangle background roughly coloured in"
            />
            <button>
              <a href={props.data.href}>Get offer</a>
            </button>
          </div>
        </div>
        <div className={s.icons}>
          {props.data.cards.map((item, j) => {
            return (
              <div className={s.card} key={j}>
                <div className={s.img}>
                  <img src={item.src} alt={item.alt} />
                </div>

                <ul>
                  {item.items.map((item, k) => {
                    return (
                      <li key={k}>
                        <img
                          src="/svgs/tick.svg"
                          alt="sketched tick with circle outline"
                        />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Section;
