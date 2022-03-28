import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Typography } from "@mui/material";
import { DataGridExample } from "../components/examples/data_grid";
import MetaMaskCard from "../components/MetaMaskCard";
import { Spacer } from "../components/Spacer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <Typography variant={"h1"}>Hello!</Typography>
        <Typography variant={"body1"}>
          {"Welcome to the Alchemy Team's Example NextJS app"}
        </Typography>
      </div>
      <div className={styles.body}>
        <Typography variant={"h4"}>
          Here are some components we make heavy use of:
        </Typography>
        <div className={styles.section}>
          <Typography className={styles.sectionTitle} variant={"h4"}>
            DataGrid
          </Typography>
          <DataGridExample />
        </div>
        <div className={styles.section}>
          <Typography className={styles.sectionTitle} variant={"h4"}>
            Connect Wallet
          </Typography>
          <MetaMaskCard />
        </div>
      </div>
      <Spacer />
    </div>
  );
};

export default Home;
