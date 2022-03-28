import { useEffect, useState } from "react";

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<string[]>([]);

  useEffect(() => {
    if (!window.ethereum) {
      return;
    }
    window.ethereum.on("accountsChanged", (_accounts) => {
      console.log("accounts ", _accounts);
      setAccounts(_accounts);
    });
  }, []);

  return accounts;
};
