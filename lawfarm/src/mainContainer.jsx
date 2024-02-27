import NavBar from "./components/nav/navbar";
import styles from "./mainContainer.module.css";
import HomePage from "./components/pages/home/homePage";
import AttorneysPage from "./components/pages/Attorneys/attorneyss.jsx";
import PracticesPage from "./components/pages/Practices/practices.jsx";
import AboutsUs from "./components/pages/abouts/aboutUsPage.jsx";
import Teams from "./components/pages/teams/teamsPage.jsx";
import FaqSection from "./components/pages/FAQPage/faq.jsx";
import NewsForm from "./components/pages/news/newsForm.jsx";
import BottomNavBar from "./components/pages/bottomNav/footerNav.jsx";

export default function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <HomePage />
      <AttorneysPage />
      <PracticesPage />
      <AboutsUs />
      <Teams />
      <FaqSection />
      <NewsForm />
      <BottomNavBar />
    </div>
  );
}
