import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Events from './pages/Events'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
        
    <Nav/>

    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/events' element={<Events/>} />
      <Route exact path='/login' element={<LoginPage/>} />
      <Route exact path='/signUp' element={<SignUp/>} />
    </Routes>

    </>
  )
}

export default App