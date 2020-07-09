import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { firstCapital } from './../helper'

const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
`

const Summary = ({ data }) => {
  const { brand, plan, year } = data

  return (
    <SummaryContainer>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {firstCapital(brand)}</li>
        <li>Plan: {firstCapital(plan)}</li>
        <li>Año del auto: {year}</li>
      </ul>
    </SummaryContainer>
  )
}

Summary.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Summary
