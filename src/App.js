import Header from './components/header/Header';
import Delivery from './components/pages/delivery/Delivery';
import Payment from './components/pages/payment/Payment';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ValueContext } from './components/context/ValueContext';
import React, {useState, useEffect} from 'react';

const App = () => {

  const [values, setValues] = useState({
    email: "",
    dropshipperName: "",
    phoneNumber: "",
    dropshipperPhoneNumber: "",
    deliveryAddress: "",
    costOfGoods: 500000,
    dropshippingFee: 0
  })

  useEffect(() => {
    const items = JSON.parse(window.localStorage.getItem('value'));
    if(!items) {
      window.localStorage.setItem('value', JSON.stringify(values));
    }
    console.log('items app', items);
  }, [values]);

  return (
    <div className="container">
      <Header />
      <Router>
        <ValueContext.Provider value={{values, setValues}}>
          <Routes>
            <Route path="/" exact element={<Delivery />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </ValueContext.Provider>
      </Router>
    </div>
  );
}

export default App;
