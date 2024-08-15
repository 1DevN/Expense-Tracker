import React from 'react';
import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import Incomeexpense from './components/Incomeexpense';
import Transactionlist from './components/Transactionlist';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/Globalstate';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Incomeexpense/>
        <Transactionlist/>
        <AddTransaction/>
      </div>

    </GlobalProvider>
  );
}

export default App;
