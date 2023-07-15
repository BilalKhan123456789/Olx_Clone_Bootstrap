import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import SigininPhone from '../Components/SigininPhone'
import Otpcode from '../Components/Otpcode'
import Home from '../Components/Home'

function Navigation() {
  return (
    <div>
          <Routes>
<Route path='/' element={<Home/>}></Route>


<Route path='/Otpcode' element={<Otpcode/>}></Route>


      </Routes>


    </div>
  )
}

export default Navigation
