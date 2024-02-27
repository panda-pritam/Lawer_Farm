import styles from "./about.module.css";
import img1 from "../../../assects/clients1.png";
import img2 from "../../../assects/clients2.png";
import img3 from "../../../assects/clients3.png";
import right from "../../../assects/right.png";
import left from "../../../assects/left.png";

export default function AboutsUs() {
  return (
    <div>
      <div className={styles.headerAndBtnDiv}>
        <h1 className={styles.header}>What says our happy Clients</h1>
        <div className={styles.BtnDiv}>
          <button className={styles.Btn}>
            <img src={left} alt="nav btn" />
          </button>
          <button className={styles.Btn} id={styles.rightBtn}>
            <img src={right} alt="nav btn" />
          </button>
        </div>
      </div>
      <div className={styles.cardDiv}>
        <div className={styles.cards}>
          <div className={styles.imgDiv}>
            <img src={img1} alt="Gift box" />
          </div>
          <h3 className={styles.name}>Jane Cooper</h3>
          <h4 className={styles.postions}>Ceo of Hunt</h4>
          <p className={styles.cardText}>
            Copy Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
          </p>
        </div>
        <div className={styles.cards} id={styles.card2}>
          <div className={styles.imgDiv}>
            <img src={img2} alt="Gift box" />
          </div>
          <h3 className={styles.name}>Devon Lane</h3>
          <h4 className={styles.postions}>Ceo of Hunt</h4>
          <p className={styles.cardText}>
            Copy Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.imgDiv}>
            <img src={img3} alt="Gift box" />
          </div>
          <h3 className={styles.name}>Robert Fox</h3>
          <h4 className={styles.postions}>Ceo of Hunt</h4>
          <p className={styles.cardText}>
            Copy Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequatduis enim velit mollit Exer. sit
            aliqua dolor do amet sint. Velit officia
          </p>
        </div>
      </div>
    </div>
  );
}
