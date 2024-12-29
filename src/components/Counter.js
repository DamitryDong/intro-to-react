/* eslint-disable */
"use client"

import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function CounterPlusMinus({ initialCount }) {

    const [coutnerValue, setCounterValue] = useState(initialCount);

    const setCounterPlusSub = (method) => {
        if(method === 'add') {
          setCounterValue((prestate) => prestate + 1) // this version does the same thing but is use to manage the state so no react malfunctions occur.
        }
        if(method === 'sub') {
          setCounterValue(coutnerValue - 1)
        }
      }

      return (
        <div>
          <h2>Counter</h2>
          <h4>{coutnerValue}</h4>
          <button onClick={() => setCounterPlusSub('add')}>+</button>
          <button onClick={() => setCounterPlusSub('sub')}>-</button>
        </div>
      );
};

CounterPlusMinus.prototype = {
    initialCount: PropTypes.number.isRequired,
}