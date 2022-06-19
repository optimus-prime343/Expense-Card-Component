import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BarChart from './bar-chart'

describe('bar-chart', () => {
  it('displays the amount and chart correctly', () => {
    render(<BarChart amountSpent={100} height={10} label='sun' />)
    expect(screen.getByText(/sun/)).toBeDefined()
  })
})
