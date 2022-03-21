import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useHistory } from "react-router-dom";



const QrCodeReader = () => {
  
let history = useHistory();
  const [data, setData] = useState('No result');
  
  return (
    <>
      <div className='qr-code-reader'>
        <h1 className='qr-code-heading'>Scan</h1>
        <QrReader
          constraints={{facingMode: 'environment'}}
          scanDelay={100}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
              
              history.push({ 
                pathname: '/payment',
                state: {senderAddress: result?.text}
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