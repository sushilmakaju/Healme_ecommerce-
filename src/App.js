// src/App.js
import React, { Component } from 'react';

import Navbar  from './Component/Navbar/navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeComponent from './Component/Home/homeComponent';
import Shopcomponent from './Component/Shop/shopcomponent';
import Aboutcomponent from './Component/About/aboutcomponent';
// import Contactcomponent from './Component/Contact/contactcomponent.jsx';
// import Functional_props from './Component/Functional_props/functional_props.jsx';
import ProductComponent from './Component/ProductComponent/productComponent.jsx';
import Login_Form from './assignment/forms/login_form.jsx';
import Register_form from './assignment/forms/register_form.jsx';
import Contact_form from './assignment/forms/contact_form.jsx';
import EventRegistration from './assignment2/Event_registration/Event_registration.jsx';

class App extends Component {
  
  render() {
    return(
      <Router>
      <Navbar />
      {/* <Functional_props /> */}
      {/* <LifecycleComponent /> */}

      <Routes>
        <Route path='/' element={<HomeComponent/>} />
        <Route path='/shop' element={<Shopcomponent/>} />
        <Route path='/about' element={<Aboutcomponent/>} />
        <Route path='/contactus' element={<Contact_form/>} />
        <Route path='/product' element={<ProductComponent/>} />
        <Route path='/login' element={<Login_Form/>} />
        <Route path='/signup' element={<Register_form/>} />
        <Route path='/assignment2' element={<EventRegistration/>} />

      </Routes>
    </Router>
    )
     

    
  }
}


export default App;
