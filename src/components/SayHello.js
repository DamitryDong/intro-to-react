import React from 'react'
import PropTypes from 'prop-types'

export default function SayHello({ name, greeting }) {

  return (
    // NOTE THAT Components have to be inside a parent <>
    <>  
        <div>This is a Div</div>
        <p>This is a paragraph</p>
        <p>{greeting}, {name} </p>
    </>
  )
}

// This is how we give the prop a data type 
SayHello.propTypes = {
    name: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
}