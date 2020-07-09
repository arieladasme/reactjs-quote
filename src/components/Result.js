import React from 'react'
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
      <TransitionGroup component="p" className="result">
        <CSSTransition
          classNames="result"
          key={quotation}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextContainer>Total: ${quotation}</TextContainer>
        </CSSTransition>
      </TransitionGroup>
    </ResultContainer>
  )
}

export default Result
