import './App.css'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'

function App() {

  return (
    <div className='container'>
      { localStorage.getItem('user') ? <Home /> : <Login /> }
    </div>
  )
}

export default App
