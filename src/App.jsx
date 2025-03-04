import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Forms from './components/Firebase/Partice/Forms'
import Login from './components/Firebase/Partice/Login'
import Profile from './components/Firebase/Partice/Profile'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Forms />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>

  )
}

export default App
// export { Data, Data1 }
