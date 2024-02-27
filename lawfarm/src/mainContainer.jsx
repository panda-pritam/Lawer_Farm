import NavBar from "./components/nav/navbar";
import styles from "./mainContainer.module.css";
import HomePage from "./components/pages/home/homePage";
import AttorneysPage from "./components/pages/Attorneys/attorneyss.jsx";
import PracticesPage from "./components/pages/Practices/practices.jsx";

export default function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <HomePage />
      <AttorneysPage />
      <PracticesPage />
    </div>
  );
}
