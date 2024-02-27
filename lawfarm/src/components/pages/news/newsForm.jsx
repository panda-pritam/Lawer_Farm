import styles from "./news.module.css";
export default function NewsForm() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.innerDiv}>
        <h1 className={styles.header}>Subscribe Our Newsletter</h1>
        <div className={styles.inputDiv}>
          <input type="text" placeholder="Name" className={styles.inputName} />
          <input
            type="email"
            placeholder="Email"
            className={styles.inputEmail}
          />
          <button className={styles.sendBtn}>SEND</button>
        </div>
      </div>
    </div>
  );
}
