import React, { useState } from 'react'
import { connectWallet } from './utils';
import { useLocation,useHistory } from "react-router-dom";
import { ethers } from 'ethers';
import { Toaster, toast } from "react-hot-toast"

function Payment() {
  let history = useHistory();
  const location = useLocation<any>();
  const [value, setValue] = useState<string>('0');

  async function pay(){
      let data = await connectWallet();


      function send_token(
        contract_address:string,
        send_token_amount:string,
        to_address:string,
        send_abi:any,
      ) {
          //Work In Progress
          if (contract_address) {
           
            let contract = new ethers.Contract(
              contract_address,
              send_abi,
              data.signer
            )
      
            console.log(contract)
            let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18)
            console.log(numberOfTokens)
            
            toast.promise(
              contract.transfer(to_address, numberOfTokens).then((transferResult:any) => {
                console.dir(transferResult)
              }),
               {
                 loading: 'Sending Transaction...',
                 success: <b>Transaction Sent!</b>,
                 error: <b>Transaction Failed!</b>,
               }
               
            );
            
          } 
          else {
            const tx = {
              from: data.signerAddress,
              to:location.state.senderAddress,
              value: ethers.utils.parseEther(send_token_amount),
              nonce: data.provider.getTransactionCount(data.signerAddress, "latest"),
              gasLimit: ethers.utils.hexlify(100000), // 100000
              gasPrice: data.provider.getGasPrice(),
            }
      
            
            toast.promise(
              data.signer.sendTransaction(tx).then((transaction:any) => {
                console.dir(transaction)
              }),
               {
                 loading: 'Sending Transaction...',
                 success: <b>Transaction Sent!</b>,
                 error: <b>Transaction Failed!</b>,
               }
            );
          }
        
      }
      
      send_token(
        "",
        value,
        location.state.senderAddress,
        []
        //[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]
      )
     
       
  }

  return (
    <div className='payment'>
        <div className='pay-input-div text-xl'>
          <input placeholder='enter amount' className='pay-input' onChange={(e)=>{setValue(e.target.value)}}/>
          ETH
        </div>
        <button onClick={pay} className='pay-submit'>
            Pay
        </button>
        <h3 className='payment-address'>Sending funds to: {location.state.senderAddress}</h3>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
        
    </div>
  )
}

export default Payment