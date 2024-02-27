import styles from "./nav.module.css";
import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../../assects/logo.svg";
import Stack from "@mui/material/Stack";
import insta from "../../../assects/IconInsta.png";
import fb from "../../../assects/IconFB.png";
import X from "../../../assects/Iconx.png";
import pint from "../../../assects/Iconpint.png";

export default function BottomNavBar() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.navDiv}>
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
            <Stack direction="row" spacing={8}>
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
          <Stack direction="row" spacing={2}>
            <img src={insta} alt="instagram logo" className={styles.logos} />
            <img src={fb} alt="faceBook logo" className={styles.logos} />
            <img src={X} alt="X logo" className={styles.logos} />
            <img src={pint} alt="pintrest logo" className={styles.logos} />
          </Stack>
        </nav>
      </div>
      <div className={styles.copyRightDiv}>
        <h6 className={styles.copyRightText}>
          © 2020 Acme. All right reserved.
        </h6>
        <h6 className={styles.copyRightText}>Privacy Policy</h6>
        <h6 className={styles.copyRighttext}>Terms of Service</h6>
      </div>
    </div>
  );
}
