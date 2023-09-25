import React, {useState} from 'react'
import Signup from './Component/Signup'
import Signin from './Component/Signin'
import { Route, Routes, Navigate } from 'react-router-dom'
//import Formik from './Component/Formik'
import Dashboard from './Component/Dashboard/Dashboard'
import Game from './Component/Game'

const App = () => {

  let token = localStorage.getItem("token")
  return (
    <div>
      <Game/>
      <Routes>
        <Route index element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={token ? <Dashboard/>: <Navigate to="/signin"/>}/>
      </Routes>
     {/* <Formik/> */}
    </div>
  )
}

export default App