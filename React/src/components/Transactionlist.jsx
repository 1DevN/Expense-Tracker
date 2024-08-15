import React,{useContext} from 'react'
import Transaction from './Transaction';
import { Globalcontext } from '../context/Globalstate'



export const Transactionlist = () => {
  const {Transactions}=useContext(Globalcontext);
  
  return (
    <div>
       <h3>History</h3>
      <ul  className="list">
        {Transactions.map(transaction=>(
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
         
      </ul>

    </div>
  )
}

export default Transactionlist
