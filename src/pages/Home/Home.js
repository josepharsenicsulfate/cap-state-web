import React from 'react'

import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

function Home() {

  const user = localStorage.getItem('user')

  const logout = () => {
    localStorage.removeItem('user', user)
  }

  return (
    <div>
      <Navigation logout={logout} />
      <div className='home'>
        <p>hi {user}</p>
        <h2>Label</h2>
        <h2>Lorem ipsum</h2>
        <h2>Label</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <div className='grid'>
          <div>
            <ul>
              <h2>Label</h2>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
            </ul>
          </div>
          <div>
            <ul>
              <h2>Label</h2>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <form>
        <label htmlFor='c-name'>Company Name</label>
        <input type='text' name='c-name' id='c-name' />
        <label htmlFor='c-name'>Company Socials</label>
        <input type='text' name='c-site' id='c-site' />
      </form> */}
    </div>
  )
}

export default Home