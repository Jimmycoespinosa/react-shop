import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../containers/Layout';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import Orders from '../pages/Orders';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import '../styles/global.css';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInicialState';

const App = ()=>{
  const InitialState = useInitialState();
  return(
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
    </BrowserRouter> 
  </AppContext.Provider>
  );
}

export default App;
