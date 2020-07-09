import React, { useState } from 'react'
import styled from '@emotion/styled'
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Result from './components/Result'
import Spinner from './components/Spinner'

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
  const [loading, saveLoading] = useState(false)

  const { quotation, data } = summary

  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <FormContainer>
        <Form saveSummary={saveSummary} saveLoading={saveLoading} />
        {loading ? <Spinner /> : null}
        {data && !loading ? <Summary data={data} /> : null}
        {quotation && !loading ? <Result quotation={quotation} /> : null}
      </FormContainer>
    </Container>
  )
}

export default App
