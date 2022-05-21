import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const Total = () => {
    const {transiction}=useContext(GlobalContext)
  const totalAmount= transiction.map(trans=>trans.amount).reduce((acc,trans)=>(acc+=trans),0)
  return (
    <div className='total'>
        <h3>Current Amount</h3>
        <h2>{totalAmount}</h2>
    </div>
  )
}

export default Total