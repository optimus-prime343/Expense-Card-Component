import styles from './bar-chart.module.scss'

interface Props {
  height: number
  label: string
  amountSpent: number
}
const BarChart = ({ height, label, amountSpent }: Props) => {
  const convertToRem = (percentage: number) => {
    return `calc(${percentage} * 1rem)`
  }

  return (
    <div className={styles['chart-container']}>
      <div
        data-amount={`$${amountSpent}`}
        style={{
          height: convertToRem(height),
        }}
        className={styles.chart}
      />
      <p className={styles.label}>{label}</p>
    </div>
  )
}

export default BarChart
