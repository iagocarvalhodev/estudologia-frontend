import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './Card'
import '@testing-library/jest-dom/extend-expect'
import { Questions } from '@/types'

test('renders card with correct title and question amount', () => {
  const quest: Questions = {
    id: 1,
    title: 'Example Title',
    questionAmount: 10,
    answered: false,
    answers: [],
  }

  const { getByText } = render(<Card quest={quest} />)

  const titleElement = getByText('Example Title')
  expect(titleElement).toBeInTheDocument()

  const res = getByText('Não Respondido')
  expect(res).toBeInTheDocument()

  const questionAmountElement = getByText('10 questões')
  expect(questionAmountElement).toBeInTheDocument()
})
