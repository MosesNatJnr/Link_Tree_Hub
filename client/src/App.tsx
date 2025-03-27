import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/Signup'
import SignIn from './pages/Signin'
import Profile from './pages/Profile'
import Links from './pages/Links'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>

<Route path="/" element={<Home />} />
<Route path="/signin" element={<SignIn />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/profile" element={<Profile />} />
<Route path="/terms" element={<Terms />} />
<Route path="/links/:username" element={<Links />} />
<Route path="*" element={<NotFound />} />
  
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
