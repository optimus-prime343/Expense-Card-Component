import styles from './total-balance.module.scss'

interface Props {
  totalBalance: number
}
const TotalBalance = ({ totalBalance }: Props) => {
  return (
    <header className={styles.header}>
      <div>
        <small className={styles.subtitle}>My Balance</small>
        <p className={styles['total-amount']}>{`$${totalBalance}`}</p>
      </div>
      <img src='/images/logo.svg' alt='Expense tracker app logo' />
    </header>
  )
}

export default TotalBalance
