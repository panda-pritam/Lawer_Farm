import styles from "./practicesPage.module.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "../../../assects/gridimg1.jpg";
import img2 from "../../../assects/gridimg2.jpg";
import img3 from "../../../assects/gridimg3.jpg";
import img4 from "../../../assects/gridimg4.jpg";
import img5 from "../../../assects/gridimg5.jpg";
import img6 from "../../../assects/gridimg6.jpg";

export default function PracticesPage() {
  return (
    <div className={styles.mainBox} id="PracticeArea">
      <h1>Area of Practices</h1>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8} className={styles.girdEle}>
              <img src={img1} alt="" className={styles.girdImg} />
              <p className={styles.imgTextXS8}>BUSINESS LAW</p>
            </Grid>
            <Grid item xs={4} className={styles.girdEle}>
              <img src={img2} alt="" className={styles.girdImg} />
              <p className={styles.imgTextXS4}>Partnership LAW</p>
            </Grid>
            <Grid item xs={4} className={styles.girdEle}>
              <img src={img3} alt="" className={styles.girdImg} />
              <p className={styles.imgTextXS4}>REAL ESTATE LAW</p>
            </Grid>
            <Grid item xs={8} className={styles.girdEle}>
              <img src={img4} alt="" className={styles.girdImg} />
              <p className={styles.imgTextXS8}>BUSINESS LAW</p>
            </Grid>
            <Grid item xs={8} className={styles.girdEle}>
              <img src={img5} alt="" className={styles.girdImg} />
              <p className={styles.imgTextXS8}>LANDLORD DISPUTES</p>
            </Grid>
            <Grid item xs={4} className={styles.girdEle}>
              <img src={img6} alt="" className={styles.girdImg} />
              <p className={styles.imgTextXS8}>ELDER ABUSE</p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
