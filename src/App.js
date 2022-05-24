import './App.css'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {

  const isLoggedIn = localStorage.getItem('username') ? true : false

  return (
    <div className='container'>
      { isLoggedIn ? <Home /> : <Login /> }
    </div>
  )
}

export default App
