import { render, screen } from '@testing-library/react'
import { Header } from './Header'
import '@testing-library/jest-dom/extend-expect'

test('header with logo is expected to have been rendered', () => {
  render(<Header />)

  const logo = screen.getByAltText('Estudologia')
  expect(logo).toBeInTheDocument()
})
