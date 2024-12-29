"use client"

import React, { useEffect, useState } from 'react';
import CounterPlusMinus from '../../components/Counter';

export default function Hooks() {
  // on hooks the const is [valueOfHook,setValueofHook]
  const [stateHook, setStateHook] = useState('State Hook Default Value');

  // useEfect will start the timer and after the component renders, will rerender adter 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {stateHook}
      <CounterPlusMinus initialCount={100}/>
      <CounterPlusMinus initialCount={2}/>
      <CounterPlusMinus initialCount={1020}/>
      <CounterPlusMinus initialCount={10120}/>
      <CounterPlusMinus initialCount={7}/>
    </div>
  );
}
