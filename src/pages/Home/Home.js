import React from 'react'

import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

function Home() {
  return (
    <div>
      <Navigation />
      <div className="home">
        <section>
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
        </section>
        <section>
          <form className='deets'>
            <label htmlFor="">Label</label>
            <input type="text" />
            <label htmlFor="">Label</label>
            <input type="text" />
          </form>
        </section>
      </div>
    </div>
  )
}

export default Home