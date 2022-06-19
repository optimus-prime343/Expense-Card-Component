import styles from './monthly-spending-summary.module.scss'
const MonthlySpendingSummary = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.subtitle}>Total this month</span>
        <h2>$478.33</h2>
      </div>
      <div className={styles.growth}>
        <p>+2.4%</p>
        <span className={styles.subtitle}>from last month</span>
      </div>
    </div>
  )
}

export default MonthlySpendingSummary
