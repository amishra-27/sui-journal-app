import { createNetworkConfig} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui/client";

// 1) Declare all variables your app uses:
type Vars = {
  counterPackageId: string;   // keep if other demos still use it
  journalPackageId: string;   // ✅ add this
  graphqlUrl: string;         // ✅ and this
};

// 2) Build a typed network config (add mainnet/devnet if you want):
export const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig<{ 
    testnet: {
      url: string;
      variables: Vars;
    };
  }>({
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        counterPackageId: "0x",                      // optional (for other lessons)
        journalPackageId: "0xb21c8bb9c8233a40ab0126c16cb826c73e6b89491ade0b38979649c641cf0b6e",
        graphqlUrl: "https://graphql.testnet.sui.io/graphql",
      },
    },
  });