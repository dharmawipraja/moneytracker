import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalState'


const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const totalBalance = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  const sign = totalBalance < 0 ? '-' : ''

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{sign}${totalBalance}</h1>
    </>
  )
}

export default Balance
