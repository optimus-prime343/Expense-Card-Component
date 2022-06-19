import { Spending } from '../../types/spending'
import BarChart from '../bar-chart/bar-chart'
import { barHeightPercentage } from '../../utils/calculate-bar-height/calculate-bar-height'
import styles from './weekly-spending.module.scss'
import MonthlySpendingSummary from '../mothly-spending-summary/monthly-spending-summary'

interface Props {
  spendings: Spending[]
}
const WeeklySpending = ({ spendings }: Props) => {
  const renderWeeklySpendingBarCharts = () => {
    return spendings.map(({ amount, day }, index) => (
      <BarChart
        key={index}
        amountSpent={amount}
        height={barHeightPercentage(spendings, amount)}
        label={day}
      />
    ))
  }
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Spending - Last 7 Days</h1>
      <div className={styles.charts}>{renderWeeklySpendingBarCharts()}</div>
      <span className={styles.divider} />
      <MonthlySpendingSummary />
    </main>
  )
}

export default WeeklySpending
