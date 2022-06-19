import { describe, expect, it } from 'vitest'
import { barHeightPercentage } from './calculate-bar-height'

describe('calculate-bar-height', () => {
  it('should calculate the barchart height per day basis', () => {
    const amountSpent = barHeightPercentage(
      [
        { amount: 10, day: 'sun' },
        { amount: 20, day: 'mon' },
      ],
      20
    )
    expect(amountSpent).toBeCloseTo(66.66666666666667)
  })
})
