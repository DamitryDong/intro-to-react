import React from 'react'
import SayHello from '@/components/SayHello'
/* eslint-disable */
export default function Components() {
    const array = [
        {
            name: "Damitry",
            greeting: "This is me saying hi to myself!",
        },
        {
            name: "hhh",
            greeting: "This is me saying hi to myself!",
        },
        {
            name: "ssss",
            greeting: "This is me saying hi to myself!",
        },
    ]
// This is how you would call react components
  return (
    <div>
        {
        array.map((item, i) => <SayHello key={i} name={item.name} greeting={item.greeting}/> ) 
        } 
    </div>
  )
}
