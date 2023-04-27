import React from 'react'
import Home from './Home'
import Main from './Main'
import Footer from './Footer'
import ZeroTrust from './ZeroTrust';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import Card from './Card';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/Main' element={<Main />}></Route>
      <Route exact path='/Footer' element={<Footer />}></Route>
      <Route exact path='/Card' element={<Card/>}></Route>
      <Route exact path='/ZeroTrust' element={<ZeroTrust/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
