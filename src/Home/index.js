import React,{useState, useEffect} from 'react';
import Web3 from "web3";
import Web3Connect from 'web3connect';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Portis from "@portis/web3";
import Fortmatic from "fortmatic";
import Squarelink from "squarelink";
import Torus from "@toruslabs/torus-embed";
import Authereum from "authereum";
import BurnerConnectProvider from "@burner-wallet/burner-connect-provider";

import heart from '../images/heart.svg';
import fb from '../images/fb.gif';
import Wallet from '../Wallet'
import './styles.css'

export default function Home (){
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) setIsMob(true);})(navigator.userAgent||navigator.vendor||window.opera);
},[isMob]);


// const web3Connect = new Web3Connect.Core({
//   providerOptions: {
//     portis: {
//       id: "PORTIS_ID", // required
//       network: "mainnet" // optional
//     },
//     fortmatic: {
//       key: "FORTMATIC_KEY", // required
//       network: "mainnet" // optional
//     }
//   }
// });

// // subscribe to connect
// web3Connect.on("connect", (provider: any) => {
//   const web3 = new Web3(provider); // add provider to web3
// });

// // subscribe to close
// web3Connect.on("close", () => {
//   console.log("Web3Connect Modal Closed"); // modal has closed
// });

// web3Connect.toggleModal(); 



  return(
    <div className={isMob ? "home mob" : "home"}>
      <h1>Play And Earn</h1>
      <div className="buttons">
            <a href="/game">New Game</a>
            <a href="/score">Score Board</a>
            <a>Get New Lives <img src={heart}/></a>
      </div>

        {/* <Web3Connect.Button 
          network = "mainnet"
          providerOptions={{
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


          }}
          onConnect = {(provider: any) => {
            const web3 = new Web3(provider);
          }}
          onClose={() => {
            console.log("Web3Connect Model Closed");
          }}
          
          /> */}
          <Wallet/>

        

        <img className="mfb" src={fb}/>

      </div>
 )
}