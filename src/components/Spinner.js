import React, { Component } from 'react';
import Loading from './spinner.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="spinner" style={{ width: '48px', height: '48px' }} className='my-2'/>
      </div>
    )
  }
}