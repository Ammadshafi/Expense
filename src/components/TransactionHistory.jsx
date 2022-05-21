import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'
import Transiction from './Transiction'


const TransactionHistory = () => {
  
    const {transiction}=useContext(GlobalContext)
   

    
    return (
    <div className='transactionhistory'>
    <span> TransactionHistory</span>
    <hr />
    <div className="history">
      <ul>
 {
   transiction.map((cur)=>(<Transiction key={cur.id} transic={cur}/>))
 }
      </ul>
    </div>
    </div>
  )
}

export default TransactionHistory