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
    field4: '',
    field5: '',
    field6: ''
  }

  let inputGet

  const change = (event) => {
    event.preventDefault()
    inputSet.field1 = document.querySelector('#input-1').value
    inputSet.field2 = document.querySelector('#input-2').value
    inputSet.field3 = document.querySelector('#input-3').value
    inputSet.field4 = document.querySelector('#input-4').value
    inputSet.field5 = document.querySelector('#input-5').value
    inputSet.field6 = document.querySelector('#input-6').value
    localStorage.setItem('input', JSON.stringify(inputSet))
    save()
  }

  const save = () => {
    inputGet = JSON.parse(localStorage.getItem('input'))
    document.querySelector('#field-1').innerHTML = inputGet.field1
    document.querySelector('#field-2').innerHTML = inputGet.field2
    document.querySelector('#field-3').innerHTML = inputGet.field3
    document.querySelector('#field-4').innerHTML = inputGet.field4
    document.querySelector('#field-5').innerHTML = inputGet.field5
    document.querySelector('#field-6').innerHTML = inputGet.field6
  }

  const download = () => {
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

  const add = (e) => {
    const G = e.target.parentElement.parentElement
    const newChild = document.createElement('input')
    G.appendChild(newChild)
  }

  const dummy_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex, tempore earum assumenda rerum quos.'

  return (
    <div style={{width: '100%'}}>
      <Navigation />
      <div className="home">
        <section className='ccs-content'>
          <input type="text" placeholder='Company Name'/>
          <div className='about'>
            <h3>About</h3>
            <textarea placeholder={dummy_text}></textarea>
          </div>
          <div className='core-comp'>
            <h4>Core Competencies</h4>
            <textarea placeholder={dummy_text}></textarea>
            <ul>
              <li style={{ listStyleType: 'none'}}>
                <FontAwesomeIcon icon='fa-lightbulb'/><input type="text"/>
              </li>
              <li style={{ listStyleType: 'none'}}>
                <FontAwesomeIcon icon='fa-lightbulb'/><input type="text"/>
              </li>
              <li style={{ listStyleType: 'none'}}>
                <FontAwesomeIcon icon='fa-lightbulb'/><input type="text"/>
              </li>
            </ul>
          </div>
          <div className='ach-client'>
            <ul>
              <h4>Past Performance</h4>
              <li>Performance 1</li>
            </ul>
            <ul>
              <h4>Featured Clients</h4>
              <li>Client 1</li>
            </ul>
          </div>
          <div className='codes-cert'>
            <h3>Codes and Certifications</h3>
            <ul>
              <li>cert</li>
              <li>cert</li>
              <li>cert</li>
              <li>cert</li>
            </ul>
          </div>
        </section>
        <section className='ccs-form' >
          <form className='ccs-form-fields' onSubmit={change}>
            <label htmlFor=''>Name</label>
            <input type='text' id='input-1' />
            <label htmlFor=''>About</label>
            <textarea type='text' id='input-2' />
            <div className='list-container'>
              <div>
                <label htmlFor=''>Cat 1</label>
                <input type='text' id='input-3' />
                <label htmlFor=''>Ipsum</label>
                <input type='text' id='input-4' />
              </div>
              <div>
                <label htmlFor=''>Cat 2</label>
                <input type='text' id='input-5' />
                <label htmlFor=''>Ipsum</label>
                <input type='text' id='input-6'/>
              </div>
            </div>
            <button 
              type='submit'>
              Save <FontAwesomeIcon icon='floppy-disk' />
            </button>
            <button 
              className='save-btn' 
              onClick={download}>
              Download <FontAwesomeIcon icon='download' />
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Home