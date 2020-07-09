import React from 'react'
import styled from '@emotion/styled'

const ResultContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`

const TextContainer = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`

const Result = ({ quotation }) => {
  return (
    <ResultContainer>
      <TextContainer>Total: ${quotation}</TextContainer>
    </ResultContainer>
  )
}

export default Result
