import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../assects/logo.svg";
import Stack from "@mui/material/Stack";
import styles from "./nav.module.css";

export default function NavBar() {
  return (
    <nav>
      {/* <Box>
        <Logo />
        <span>IGSTUDIO</span>
      </Box> */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
        <span className={styles.links}>IGSTUDIO</span>
      </Stack>
      <div>
        <Stack direction="row" spacing={5}>
          <a href="#Home" className={styles.links}>
            Home
          </a>
          <a href="#Attorneys" className={styles.links}>
            Attorneys
          </a>
          <a href="#PracticeArea" className={styles.links}>
            Practice Areas
          </a>
          <a href="#" className={styles.links}>
            About Us
          </a>
        </Stack>
      </div>
      <div className={styles.contactNowBtn}>
        <a href="#" className={styles.links}>
          Contact Now
        </a>
      </div>
    </nav>
  );
}
