import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TotalBalance from './total-balance'

describe('TotalBalance Test', () => {
  it('should render the total balance', () => {
    render(<TotalBalance totalBalance={8000} />)
    expect(screen.getByText('$8000')).toBeDefined()
  })
})
