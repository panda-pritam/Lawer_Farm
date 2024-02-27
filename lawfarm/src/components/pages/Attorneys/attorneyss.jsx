import styles from "./Attorneys.module.css";
import boxShap from "../../../assects/gift.png";
export default function AttorneysPage() {
  return (
    <div className={styles.mainBox} id="Attorneys">
      <div className={styles.pageContentBox}>
        <div className={styles.leftBox}>
          <h1 className={styles.line1}>Let’s Introduce Ourself</h1>
        </div>
        <div className={styles.rightBox}>
          <h4 className={styles.line2Header}> Criminal Lawyer</h4>
          <p className={styles.line2Para}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <div>
        <h1 className={styles.whyHeader}>Why Choose us?</h1>
        <div className={styles.cardDiv}>
          <div className={styles.cards}>
            <div className={styles.imgDiv}>
              <img src={boxShap} alt="Gift box" />
            </div>
            <h3 className={styles.cardHeader}>98% Success Rate</h3>
            <p className={styles.cardText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.cardBtn}>Read More</button>
          </div>
          <div className={styles.cards} id={styles.card2}>
            <div className={styles.imgDiv}>
              <img src={boxShap} alt="Gift box" />
            </div>
            <h3 className={styles.cardHeader}>100% Success Rate</h3>
            <p className={styles.cardText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.cardBtn}>Read More</button>
          </div>
          <div className={styles.cards}>
            <div className={styles.imgDiv}>
              <img src={boxShap} alt="Gift box" />
            </div>
            <h3 className={styles.cardHeader}>100% Success Rate</h3>
            <p className={styles.cardText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className={styles.cardBtn}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
