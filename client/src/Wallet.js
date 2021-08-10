import React, { useState } from 'react';
import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import Squarelink from "squarelink";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";


export default function Wallet({setIntraProvider, provider}){


  const [account, setAccount] = useState('')


 

 async function tryToConnect() {
  if (provider === null){
    const web3Modal = new Web3Modal({
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
  
      },
      cacheProvider: true,
  });
    const temp_provider = await web3Modal.connect().catch(rej => console.log('probably disconnected'));
  if (temp_provider !== null && typeof(temp_provider) !== 'undefined'){
      setIntraProvider(temp_provider);
      setAccount(temp_provider.selectedAddress);

    
    }
  }
}




if (provider !== null){
 // Subscribe to accounts change
 provider.on("accountsChanged", (accounts) => {
  setAccount(accounts[0]);
});

// Subscribe to chainId change
provider.on("chainChanged", (chainId) => {
  console.log(chainId);
});

// Subscribe to provider connection

provider.on("close", () => {
  console.log("Modal CLosed By User")
})


// Subscribe to provider disconnection
provider.on("disconnect", (error) => {
  console.log(error);
});
}




return(
    <div className="connect_wallet">
      
       {account ? <h3>Wallet Address</h3> : <></>} 
          <button onClick={() => tryToConnect()} > 
         {account ? <p>{account}</p> : <p>Connect Wallet</p>}
        </button>  
        {/* <h3 onClick={() => setIntraProvider(null)}>Choose different wallet</h3> */}
    </div>
)
}
