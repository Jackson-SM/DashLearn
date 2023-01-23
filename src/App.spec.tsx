import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Should be able show component App on the document', () => {
    const { getByText } = render(<App />)
  })
})
