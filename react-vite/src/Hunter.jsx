import React from 'react'

const Hunter = ({ name, nenType, strength }) => {
  // const { name, nenType, strength } = props
  const clickHandler = () => {
    alert('Hello World')
  }
  const complexExample = (strength) => {
    console.log(strength)
  }
  return (
    <article>
      <h2>{name}</h2>
      <h3>{nenType}</h3>
      <h4>{strength}</h4>
      <button type='button' onClick={clickHandler}>
        button
      </button>
      <button type='button' onClick={() => complexExample(strength)}>
        complex button
      </button>
    </article>
  )
}

export default Hunter
