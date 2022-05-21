import React from 'react'
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionHistory from './components/TransactionHistory'
import Total from './components/Total'

import AddTransaction from './components/AddTransaction'
import {GlobalProvider} from"./components/GlobalContext"


function App() {
  return (
 <GlobalProvider>
<div class="container">
<Header/>
<Total/>
<Balance/>
<TransactionHistory/>
<AddTransaction/>
</div>
</GlobalProvider>
  );
}

export default App;
