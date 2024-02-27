import NavBar from "../../nav/navbar";
import styles from "./homePage.module.css";
import msgIcon from "../../../assects/Message 35.png";
import boy from "../../../assects/boy.png";
import shap from "../../../assects/Shape.png";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <NavBar />
        <div className={styles.pageContent} id="Home">
          <div className={styles.leftContent}>
            <div>
              <h2 className={styles.headLine1}>You don’t have to </h2>
              <h1 className={styles.headLine2}>Fight them Alone.</h1>
            </div>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              eaque dolor laudantium placeat fugiat nobis distinctio ipsa quae
              accusamus eum quisquam quasi dignissimos explicabo, corrupti non
              aspernatur neque reprehenderit delectus?
            </p>
            <div className={styles.emailDiv}>
              <img src={msgIcon} alt="mag" className={styles.msgIcon} />
              <input
                type="email"
                placeholder="Enter your eamil address"
                className={styles.emaiInput}
              />
              <button className={styles.submitBtn}>Let's Talk</button>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.imgDiv}>
              <img src={boy} alt="" className={styles.Boyimg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
