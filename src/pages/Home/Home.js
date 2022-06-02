import React from 'react'

import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

function Home() {
  let inputSet = {
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  }

  let inputGet

  const change = (event) => {
    event.preventDefault()
    inputSet.field1 = document.querySelector('#input-1').value
    inputSet.field2 = document.querySelector('#input-2').value
    inputSet.field3 = document.querySelector('#input-3').value
    inputSet.field4 = document.querySelector('#input-4').value
    localStorage.setItem('input', JSON.stringify(inputSet))
    alert('input submitted')
    print()
  }

  const print = () => {
    inputGet = JSON.parse(localStorage.getItem('input'))
    document.querySelector('#field-1').innerHTML = inputGet.field1
    document.querySelector('#field-2').innerHTML = inputGet.field2
    document.querySelector('#field-3').innerHTML = inputGet.field3
    document.querySelector('#field-4').innerHTML = inputGet.field4
  }

  return (
    <div>
      <Navigation />
      <div className="home">
        <section className='ccs-content'>
          <h2>Label</h2>
          <h2 id='field-1'>text</h2>
          <h2>Label</h2>
          <p id='field-2'>text</p>
          <div className='grid'>
            <ul>
              <h2 id='field-3'>text</h2>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
            </ul>
            <ul>
              <h2 id='field-4'>text</h2>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
            </ul>
          </div>
        </section>
        <section className='ccs-form' >
          <form className='deets' onSubmit={change}>
            <label htmlFor=''>Label</label>
            <input type='text' id='input-1' />
            <label htmlFor=''>Label</label>
            <input type='text' id='input-2' />
            <label htmlFor=''>Label</label>
            <input type='text' id='input-3' />
            <label htmlFor=''>Label</label>
            <input type='text' id='input-4' />
            <button type='submit'>Save</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Home