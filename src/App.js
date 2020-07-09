import React, { useState } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`

function App() {
  const [summary, saveSummary] = useState({})
  const { data } = summary

  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <FormContainer>
        <Form saveSummary={saveSummary} />
        {data ? <Summary data={data} /> : null}
      </FormContainer>
    </Container>
  )
}

export default App
