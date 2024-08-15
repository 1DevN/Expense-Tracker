import React, {createContext,useReducer} from "react";
import AppReducer from './AppReducer'

//initial state
const initialState ={ 
   Transactions : []
}

//create context
export const Globalcontext=createContext(initialState);

//provider component
export const GlobalProvider=({children})=>{
      const[state,dispatch]=useReducer(AppReducer,initialState);
    
    //Action
    function deleteTransaction(id){
        dispatch({
          type:'DELETE_TRANSACTION',
          payload:id
        });
    }

    function addTransaction(Transact){
       dispatch({
        type:'ADD_TRANSACTION',
        payload:Transact
       }
       )
    }
      
    return(<Globalcontext.Provider value={{
      Transactions: state.Transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </Globalcontext.Provider>)
}