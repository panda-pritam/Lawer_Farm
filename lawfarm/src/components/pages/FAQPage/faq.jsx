import styles from "./faq.module.css";
export default function FaqSection() {
  return (
    <div className={styles.faqDiv}>
      <h1 className={styles.header}>FAQ</h1>
      <div className={styles.contentDiv}>
        <div className={styles.LeftDiv}>
          <p className={styles.para}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className={styles.RightDiv}>
          <div>
            <h3 className={styles.accoQ}>
              Do I need a personal injury report?
            </h3>
            <p className={styles.para}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <hr />
          <div className={styles.accoBox}>
            <h3 className={styles.accoQ}>How much is my case worth?</h3>
            <button className={styles.accoBtn}>+</button>
          </div>
          <hr />
          <div className={styles.accoBox}>
            <h3 className={styles.accoQ}>
              What should I do right after car accidect
            </h3>
            <button className={styles.accoBtn}>+</button>
          </div>
          <hr />
          <div className={styles.accoBox}>
            <h3 className={styles.accoQ}>How much is my case worth?</h3>
            <button className={styles.accoBtn}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
