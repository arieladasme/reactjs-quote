import React from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <FormContainer></FormContainer>
    </Container>
  )
}

export default App
