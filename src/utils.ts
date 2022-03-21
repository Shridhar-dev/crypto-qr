import Web3Modal from "web3modal"
import { ethers } from "ethers"


let signer,signerAdd

async function connectWallet(){
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    signer = provider.getSigner();
    signerAdd = await signer.getAddress();
   
    return {
        signer:signer,
        signerAddress:signerAdd,
        provider:provider
    }
}


export { connectWallet}