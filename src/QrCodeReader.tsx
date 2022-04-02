import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useHistory } from "react-router-dom";



const QrCodeReader = () => {
  
  let history = useHistory();
  const [data, setData] = useState('No result');
  
  return (
    <>
      <div className='qr-code-reader text-3xl '>
        <h1 className='qr-code-heading mb-5'>Scan the QR</h1>
        <QrReader
          constraints={{facingMode: 'environment'}}
          scanDelay={100}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.getText());
              
              history.push({ 
                pathname: '/payment',
                state: {senderAddress: result?.getText()}
              });
            }

            if (!!error) {
              console.info(error);
            }
          }}
          ViewFinder={() => <div className='qr-code-reader__view-finder'></div>}
  
        />
      </div>
      
    </>
  );
};

export default QrCodeReader;