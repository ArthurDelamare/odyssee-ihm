import styles from "../styles/card.module.css";

interface CardProps {
  title: string;
  status: string;
  type: string;
  percentage: number;
  aimed: string;
  duration: string;
  debtType: string;
  rendement: string;
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <img
        className={styles.image}
        src="https://picsum.photos/342/236"
        alt="project-image"
      />
      <span className={styles.dot}></span>
      <strong>{props.status}</strong>
      <h4 className={styles.projectType}>{props.type}</h4>

      <div
        style={{
          border: "1px solid ##ccc!important",
          backgroundColor: "#eee",
          marginBottom: "2vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#44D7B6!important",
            height: "24px",
            width: `${props.percentage}%`,
            color: "white",
            paddingLeft: "10px",
          }}
        >
          {props.percentage}% collectés
        </div>
      </div>
      <div className={styles.smallTextWrapper}>
        <div>
          <img src="https://icongr.am/fontawesome/bar-chart.svg?size=20&color=000000" />
        </div>
        <p className={styles.smallText + " " + styles.textSeparator}>
          Montant recherché : {props.aimed}
        </p>
        <div>
          <img src="https://icongr.am/fontawesome/clock-o.svg?size=20&color=000000" />
        </div>
        <p className={styles.smallText}>Durée : {props.duration}</p>
      </div>
      <div className={styles.smallTextWrapper}>
        <div>
          <img src="https://icongr.am/fontawesome/file-text.svg?size=20&color=000000" />
        </div>
        <p className={styles.smallText + " " + styles.textSeparator}>
          {props.debtType}
        </p>
        <div>
          <img src="https://icongr.am/fontawesome/money.svg?size=20&color=000000" />
        </div>
        <p className={styles.smallText}>{props.rendement}</p>
      </div>
    </div>
  );
};
export default Card;
