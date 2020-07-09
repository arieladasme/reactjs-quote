import React, { useState } from 'react'
import styled from '@emotion/styled'
import { getYearDifference, calculateBrand, getPlan } from './../helper'

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`

const Label = styled.label`
  flex: 0 0 100px;
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.2s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  border-bottom: 2rem;
`

const Form = ({ saveSummary, saveLoading }) => {
  const [data, saveData] = useState({
    brand: '',
    year: '',
    plan: '',
  })

  const [error, saveError] = useState(false)

  // Read and add data to state
  const getData = e => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const { brand, year, plan } = data

  // onSubmit
  const quoteInsurance = e => {
    e.preventDefault()

    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
      saveError(true)
      return
    }
    saveError(false)

    // Base 2000
    let result = 2000

    // Get difference of years
    const differenceYear = getYearDifference(year)

    // Substract 3%
    result -= (differenceYear * 3 * result) / 100

    // American 15% European 30% Asian 5%
    result = calculateBrand(brand) * result

    // Plan: Basic 20% - Full 50%
    const increasePlan = getPlan(plan)
    result = parseFloat(increasePlan * result).toFixed(2)

    // Show spinner
    saveLoading(true)

    setTimeout(() => {
      // Delete spinner
      saveLoading(false)
      saveSummary({
        quotation: result,
        data,
      })
    }, 1600)
  }

  return (
    <form onSubmit={quoteInsurance}>
      {error ? (
        <Field>
          <Error>Todos los campos son obligatorios</Error>
        </Field>
      ) : null}
      <Field>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === 'basic'}
          onChange={getData}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="full"
          checked={plan === 'full'}
          onChange={getData}
        />
        Full
      </Field>

      <Button type="submit">Cotizar</Button>
    </form>
  )
}

export default Form
