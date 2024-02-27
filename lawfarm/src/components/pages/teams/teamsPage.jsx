import styles from "./team.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "../../../assects/team1.png";
import img2 from "../../../assects/team2.png";
import img3 from "../../../assects/team3.jpg";
import img4 from "../../../assects/team4.png";
import img5 from "../../../assects/team5.jpg";
import img6 from "../../../assects/team6.jpg";

export default function Teams() {
  return (
    <div className={styles.teamsContainer}>
      <h1 className={styles.header}>Our Team</h1>
      <div className={styles.gridContainer}>
        <Box className={styles.teams}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={4}>
              <Box className={styles.cardBox}>
                <Box className={styles.imgBox}>
                  <img src={img1} alt="" />
                </Box>
                <Box className={styles.textBox}>
                  <h3 className={styles.name}>Danial Def</h3>
                  <p className={styles.cases}>301 Cases</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} md={4}>
              <Box className={styles.cardBox} id={styles.selectedBox}>
                <Box className={styles.imgBox}>
                  <img src={img2} alt="" />
                </Box>
                <Box className={styles.textBox}>
                  <h3 className={styles.name}>Sanfole</h3>
                  <p className={styles.cases}>850 Cases</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} md={4}>
              <Box className={styles.cardBox}>
                <Box className={styles.imgBox}>
                  <img src={img3} alt="" />
                </Box>
                <Box className={styles.textBox}>
                  <h3 className={styles.name}>Cesforila</h3>
                  <p className={styles.cases}>470 Cases</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} md={4}>
              <Box className={styles.cardBox}>
                <Box className={styles.imgBox}>
                  <img src={img4} alt="" />
                </Box>
                <Box className={styles.textBox}>
                  <h3 className={styles.name}>Colleen</h3>
                  <p className={styles.cases}>180 Cases</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} md={4}>
              <Box className={styles.cardBox}>
                <Box className={styles.imgBox}>
                  <img src={img5} alt="" />
                </Box>
                <Box className={styles.textBox}>
                  <h3 className={styles.name}>Haldone</h3>
                  <p className={styles.cases}>212 Cases</p>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={2} md={4}>
              <Box className={styles.cardBox}>
                <Box className={styles.imgBox}>
                  <img src={img6} alt="" />
                </Box>
                <Box className={styles.textBox}>
                  <h3 className={styles.name}>Nik Jeo</h3>
                  <p className={styles.cases}>350 Cases</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
