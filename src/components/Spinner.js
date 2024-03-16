import React from 'react';
import Loading from './spinner.gif';

export default function Spinner ()  {
 
    return (
      <div className='text-center'>
        <img src={Loading} alt="spinner" style={{ width: '48px', height: '48px' }} className='my-2'/>
      </div>
    )

}