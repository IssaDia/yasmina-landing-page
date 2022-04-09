import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'
import Layout from './components/Layout'

test('renders learn react link', () => {
  render(<App />)
  render(<Layout />)
})
