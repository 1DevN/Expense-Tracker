import React,{useContext} from 'react'
import { Globalcontext } from '../context/Globalstate';


const Transaction = ({transaction}) => {
    const {deleteTransaction}=useContext(Globalcontext);
    //sign
    const sign=transaction.amount < 0 ?'-':'+';
  return (
       <li className={transaction.amount< 0?'minus':'plus'}>
          {transaction.text}<span>{sign}₹{Math.abs(transaction.amount)}</span>
          <button onClick={()=>{deleteTransaction(transaction.id)}} className="delete-btn">x</button>
        </li>
  )
}

export default Transaction
