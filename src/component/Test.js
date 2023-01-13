import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.div`
  color: red;
  font-size: 50px;
`

const Test = () => {
  const TestClick = () => {
    alert('하하')
  }
  return (
    <>
      <Title>Test</Title>
      <button onClick={TestClick}>click</button>
    </>
  )
}

export default Test
