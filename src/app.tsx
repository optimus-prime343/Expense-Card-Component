import styles from './app.module.scss'
import TotalBalance from './components/total-balance/total-balance'
import WeeklySpending from './components/weekly-spending/weekly-spending'
import { spendings } from './data/spendings'

const App = () => {
  return (
    <div className={styles.container}>
      <TotalBalance totalBalance={1000} />
      <WeeklySpending spendings={spendings} />
    </div>
  )
}

export default App
