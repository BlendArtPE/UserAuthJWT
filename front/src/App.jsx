
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Sign from './components/Sign'
import Profile from './components/Profile'
import Home from './components/Home'
import Navigation from './Navigation';

function App() {

  return (
    <>
    <Navigation />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign" element={<Sign />}/>
        <Route path="/profile" element={<Profile />}/>
    </Routes>
    </>
  )
}

export default App
