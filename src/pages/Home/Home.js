import React from 'react'

import './Home.css'

import Navigation from '../../components/Navigation/Navigation'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

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
    save()
  }

  const save = () => {
    inputGet = JSON.parse(localStorage.getItem('input'))
    document.querySelector('#field-1').innerHTML = inputGet.field1
    document.querySelector('#field-2').innerHTML = inputGet.field2
    document.querySelector('#field-3').innerHTML = inputGet.field3
    document.querySelector('#field-4').innerHTML = inputGet.field4
  }

  const print = () => {
    const width = document.querySelector('.ccs-content').offsetWidth
    const height = document.querySelector('.ccs-content').offsetHeight
    const domElement = document.querySelector('.ccs-content')
    html2canvas(domElement, { onclone: (document) => {
      document.querySelector('.save-btn').style.visibility = 'hidden'
    }})
    .then((canvas) => {
      const px2in = 0.0104166667
      const img = canvas.toDataURL('image/jpeg')
      const pdf = new jsPDF('p', 'in', [width*px2in,height*px2in])
      pdf.addImage(img, 'JPEG', 0, 0, width*px2in, height*px2in)
      pdf.save(inputSet.field1+'-ccs.pdf')
    })
  }

  return (
    <div style={{width: '100%'}}>
      <Navigation />
      <div className="home">
        <section className='ccs-content'>
          <h2>Name</h2>
          <h2 id='field-1'>text</h2>
          <h3>Background</h3>
          <p id='field-2'>text</p>
          <div className='list-container'>
            <ul>
              <h3 id='field-3'>Cat 1</h3>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
            </ul>
            <ul>
              <h3 id='field-4'>Cat 2</h3>
              <li>Lorem</li>
              <li>Ipsum</li>
              <li>Dolor</li>
            </ul>
          </div>
        </section>
        <section className='ccs-form' >
          <form className='ccs-form-fields' onSubmit={change}>
            <label htmlFor=''>Name</label>
            <input type='text' id='input-1' />
            <label htmlFor=''>Background</label>
            <textarea type='text' id='input-2' />
            <label htmlFor=''>Cat 1</label>
            <input type='text' id='input-3' />
            <label htmlFor=''>Cat 2</label>
            <input type='text' id='input-4' />
            <button 
              type='submit'>
              Save <FontAwesomeIcon icon='floppy-disk' />
            </button>
            <button 
              className='save-btn' 
              onClick={print}>
              Print <FontAwesomeIcon icon='print' />
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Home