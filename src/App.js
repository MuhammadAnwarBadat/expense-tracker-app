import Header from './components/Header';
import Footer from './components/Footer';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import { GlobalContextProvider } from './context/GlobalState';

import './App.css';

const App = () => {
  return (
    <GlobalContextProvider>
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Footer />
        <Balance />
        <AddTransaction />
        <IncomeList />
        <ExpenseList />
      </div>
    </div>
    </GlobalContextProvider>
  );
};

export default App;
