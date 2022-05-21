import React,{useContext} from 'react'
import {GlobalContext}from './GlobalContext';

const Transiction = ({transic}) => {
    const {del} = useContext(GlobalContext)
    const classtype=transic.amount>0 ? 'inc' : 'exp';
  return (

    <li className={classtype}><span>{transic.desc}</span>
    <span>{transic.amount}</span>
    <button onClick={()=>del(transic.id)}>Delete</button>
    </li>
  )
}

export default Transiction