import React, { Component } from 'react';
import Loading from './spinner.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="spinner" className="img-fluid w-25" />
      </div>
    )
  }
}