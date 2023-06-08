import React, { useContext, useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './index.scss'

import Catalogue from './pages/catalogue/catalogue';
import About from './pages/home/About'
import SignUpForm from './pages/sign-up/SignUpForm';
import LogInForm from './pages/sign-up/LogInForm';
import Home from './pages/home/Home';
import CatalogueFil from './pages/catalogue/catalogue-fil';
import Admin from './pages/Admin';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';

//const Home = lazy(() => import('./pages/home/Home'))
//import { Lazy } from 'react';


const App = observer(() => {
 
  const {user} = useContext(Context)

  
  useEffect(()=>{
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    })
  }, [])


  return (
    <>
      <Routes>
        {user.isAuth && (
          <>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/catalogue' element={<CatalogueFil/>}/>
          </>
        )}

        <Route path='/' element={<Home/>}/>
        <Route path='/genres' element={<Catalogue/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-up' element={<SignUpForm/>}/>
        <Route path='/log-in' element={<LogInForm/>}/>
        <Route path ='*' element={<LogInForm/>}/>
      </Routes>
    </>
  );
})


export default App;
