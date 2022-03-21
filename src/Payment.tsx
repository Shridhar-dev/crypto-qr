import React, { useState } from 'react'
import { connectWallet } from './utils';
import { useLocation } from "react-router-dom";
import { ethers } from 'ethers';

function Payment() {
  const location = useLocation();
  const [value, setValue] = useState<string>('0');

  async function pay(){
      let data = await connectWallet();

      const tx = {
        from: data.signerAddress,
        to: location.state.senderAddress,
        value: ethers.utils.parseEther(value),
        nonce: data.provider.getTransactionCount(data.signerAddress, "latest"),
        gasLimit: ethers.utils.hexlify(100000), // 100000
        gasPrice: data.provider.getGasPrice(),
      }

      data.signer.sendTransaction(tx).then((transaction:any) => {
        console.dir(transaction)
        alert("Send finished!")
      })
  }

  return (
    <div className='payment'>
        <div className='pay-input-div'>
          <input placeholder='enter amount' className='pay-input' onChange={(e)=>{setValue(e.target.value)}}/>
          ETH
        </div>
        <button onClick={pay} className='pay-submit'>
            Pay
        </button>
    </div>
  )
}

export default Payment