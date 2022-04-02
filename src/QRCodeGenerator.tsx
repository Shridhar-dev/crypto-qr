import React, { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { connectWallet } from './utils';



const QrCodeGenerator = () => {

  const [data, setData] = useState<string | undefined>();	

  useEffect(() => {
      async function getAddress(){
        let {signerAddress} = await connectWallet();
        setData(signerAddress);
        console.log(signerAddress)
      }
      getAddress();
  }, [])
  
  
  return (
    <>
      {data && 
      <div className='flex items-center justify-center min-h-screen flex-col'>
        <h3 className='payment-address text-center text-xl mb-5'>Here's your QR for your address : {data}</h3>
        <div className='bg-white p-10'>
          <QRCode value={data} />
        </div>
      </div>
      }
    </>
  );
};

export default QrCodeGenerator;