import { IEthereumProvider } from "eip1193-provider";

declare global {
  interface Window {
    ethereum?: IEthereumProvider;
  }
}
