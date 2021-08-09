import React from 'react';
import Web3 from 'web3';
import Web3Connect from 'web3connect';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import Squarelink from "squarelink";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";


export default function Wallet(){


const web3Connect = new Web3Connect.Core({
    network : "mainnet",
    providerOptions:{
        walletconnect: {
            package: WalletConnectProvider,
            options:{
              infuraId: "INFURA_ID"
            }
          },
          burnerconnect: {
            package: BurnerConnectProvider, // required
            options: {}
          },
          portis: {
            package: Portis, // required
            options: {
              id: "PORTIS_ID" // required
            }
          },
          fortmatic: {
            package: Fortmatic, // required
            options: {
              key: "FORTMATIC_KEY" // required
            }
          },
          squarelink: {
            package: Squarelink, // required
            options: {
              id: "SQUARELINK_ID" // required
            }
          },
          torus: {
            package: Torus, // required
            options: {
              enableLogging: false, // optional
              buttonPosition: "bottom-left", // optional
              buildEnv: "production", // optional
              showTorusButton: true, // optional
              enabledVerifiers: {
                // optional
                google: false // optional
              }
            }
          },
          authereum: {
            package: Authereum, // required
            options: {}
          },
          burnerconnect: {
            package: BurnerConnectProvider, // required
            options: {}
          }

    }
});

web3Connect.on("connect", (provider: any) => {
    const web3 = new Web3(provider);
});

web3Connect.on("close", () => {
    console.log("web3Connect Modal Closed");
});


return(
    <div className="connect_wallet">
        <button onClick={() => web3Connect.toggleModal()}> Connect Wallet</button>
    </div>
)
}
