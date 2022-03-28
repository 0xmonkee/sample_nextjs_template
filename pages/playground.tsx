import { useEffect } from "react";
import { Typography } from "@mui/material";
import styles from "./playground.module.scss";
import { hooks, metaMask } from "../connectors/metamask";
import { useAccounts } from "../hooks/useAccounts";

const {
  useChainId,
  useError,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

const Playground = () => {
  const accounts = useAccounts();
  const chainId = useChainId();
  console.log("accounts", accounts);

  useEffect(() => {
    metaMask?.connectEagerly();
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant={"h1"}>Try stuff here!</Typography>
      <Typography variant={"h5"}>Accounts:</Typography>
      <pre>{JSON.stringify(accounts, null, 2)}</pre>
      <Typography variant={"h5"}>Chain Id:</Typography>
      <pre>{JSON.stringify(chainId, null, 2)}</pre>
    </div>
  );
};

export default Playground;
