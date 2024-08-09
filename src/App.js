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

import RegistrationForm from './Component/Register/RegisterComponent.jsx';
import Contact_form from './assignment/forms/contact_form.jsx';
import EventRegistration from './assignment2/Event_registration/Event_registration.jsx';
import LoginForm from './Component/Login/LoginComponent.jsx';
import CategoryComponent from './Component/Category/categoryComponent.jsx';
import AddProductComponent from './Component/AddProductComponent/addProductComponent.jsx';
import ListProductComponent from './Component/ListProductComponent/listProductComponent.jsx';

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
        <Route path='/product' element={<AddProductComponent/>} />
        <Route path='/category' element={<CategoryComponent/>} />
        <Route path='/listproduct' element={<ListProductComponent/>} />
       
        <Route path='/login' element={<LoginForm/>} />
        <Route path='/signup' element={<RegistrationForm/>} />
        <Route path='/assignment2' element={<EventRegistration/>} />

      </Routes>
    </Router>
    )
     

    
  }
}


export default App;
