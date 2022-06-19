import { Spending } from '../../types/spending'

export const barHeightPercentage = (
  spendings: Spending[],
  amountSpentInDay: number
): number => {
  const totalAmountSpentInWeek = spendings.reduce(
    (acc, curr) => acc + curr.amount,
    0
  )
  const barHeightInPercent = (amountSpentInDay / totalAmountSpentInWeek) * 100
  return barHeightInPercent
}
