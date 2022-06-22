import React from 'react'
import './Home.css'
import Navigation from '../../components/Navigation/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function Home() {
  let huh = JSON.parse(localStorage.getItem('input'))

  let deets = {
    name: huh.name,
    about: huh.about,
    core_comp: {
      narrative: huh.core_comp.narrative,
      core_1: huh.core_comp.core_1,
      core_2: huh.core_comp.core_2,
      core_3: huh.core_comp.core_3
    },
    past_perf: {
      pp_1: huh.past_perf.pp_1,
      pp_2: huh.past_perf.pp_2,
      pp_3: huh.past_perf.pp_3
    },
    feat_client: {
      fc_1: huh.feat_client.fc_1,
      fc_2: huh.feat_client.fc_2,
      fc_3: huh.feat_client.fc_3 
    },
    codes_cert: {
      cc_1: huh.codes_cert.cc_1,
      cc_2: huh.codes_cert.cc_2,
      cc_3: huh.codes_cert.cc_3
    }
  }

  const save = (e) => {
    e.preventDefault()
    deets.name = document.getElementsByName('name')[0].value
    deets.about = document.getElementsByName('about')[0].value
    deets.core_comp.narrative = document.getElementsByName('cc_narrative')[0].value
    deets.core_comp.core_1 = document.getElementsByName('core_1')[0].value
    deets.core_comp.core_2 = document.getElementsByName('core_2')[0].value
    deets.core_comp.core_3 = document.getElementsByName('core_3')[0].value
    deets.past_perf.pp_1 = document.getElementsByName('pp_1')[0].value
    deets.past_perf.pp_2 = document.getElementsByName('pp_2')[0].value
    deets.past_perf.pp_3 = document.getElementsByName('pp_3')[0].value
    deets.feat_client.fc_1 = document.getElementsByName('fc_1')[0].value
    deets.feat_client.fc_2 = document.getElementsByName('fc_2')[0].value
    deets.feat_client.fc_3 = document.getElementsByName('fc_3')[0].value
    deets.codes_cert.cc_1 = document.getElementsByName('cc_1')[0].value
    deets.codes_cert.cc_2 = document.getElementsByName('cc_2')[0].value
    deets.codes_cert.cc_3 = document.getElementsByName('cc_3')[0].value
    localStorage.removeItem('input')
    localStorage.setItem('input', JSON.stringify(deets))
  }

  const download = (e) => {
    e.preventDefault()
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
      pdf.save(deets.name+'-ccs.pdf')
    })
  }

  // const add = (e) => {
  //   const G = e.target.parentElement.parentElement
  //   const newChild = document.createElement('input')
  //   G.appendChild(newChild)
  // }

  return (
    <div style={{width: '100%'}}>
      <Navigation />
      <div className="home">
        <section className='ccs-content'>
          <div className='comp-id'>
            <img src="https://www.streamscheme.com/wp-content/uploads/2020/11/YEP-emote.png" alt="" />
            <h1>{deets.name}</h1>
          </div>
          <div className='about'>
            <h3>About</h3>
            <p>{deets.about}</p>
          </div>
          <div className='core-comp'>
            <h4>Core Competencies</h4>
            <p>{deets.core_comp.narrative}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon='fa-lightbulb'/>
                <p>{deets.core_comp.core_1}</p>
              </li>
              <li>
                <FontAwesomeIcon icon='fa-lightbulb'/>
                <p>{deets.core_comp.core_2}</p>
              </li>
              <li>
                <FontAwesomeIcon icon='fa-lightbulb'/>
                <p>{deets.core_comp.core_3}</p>
              </li>
            </ul>
          </div>
          <div className='ach-client'>
            <ul>
              <h4>Past Performance</h4>
              <li>{deets.past_perf.pp_1}</li>
              <li>{deets.past_perf.pp_2}</li>
              <li>{deets.past_perf.pp_3}</li>
            </ul>
            <ul>
              <h4>Featured Clients</h4>
              <li>{deets.feat_client.fc_1}</li>
              <li>{deets.feat_client.fc_2}</li>
              <li>{deets.feat_client.fc_3}</li>
            </ul>
          </div>
          <div className='codes-cert'>
            <h3>Codes and Certifications</h3>
            <ul>
              <li>{deets.codes_cert.cc_1}</li>
              <li>{deets.codes_cert.cc_2}</li>
              <li>{deets.codes_cert.cc_3}</li>
            </ul>
          </div>
        </section>

        <section className='ccs-form' >
          <form className='ccs-form-fields' onSubmit={save}>
            <div>
              <label htmlFor=''>Name</label>
              <input type='text' name='name' defaultValue={deets.name}/>
            </div>
            <div>
              <label htmlFor=''>About</label>
              <textarea type='text' name='about' defaultValue={deets.about}/>
            </div>
            <div>
              <label htmlFor=''>Core Competencies</label>
              <textarea type='text' name='cc_narrative' defaultValue={deets.core_comp.narrative}/>
              <input type='text' name='core_1' defaultValue={deets.core_comp.core_1}/>
              <input type='text' name='core_2' defaultValue={deets.core_comp.core_2}/>
              <input type='text' name='core_3' defaultValue={deets.core_comp.core_3}/>
            </div>
            <div>
              <div>
                <label htmlFor=''>Past Performances</label>
                <input type='text' name='pp_1' defaultValue={deets.past_perf.pp_1}/>
                <input type='text' name='pp_2' defaultValue={deets.past_perf.pp_2}/>
                <input type='text' name='pp_3' defaultValue= {deets.past_perf.pp_3}/>
              </div>
              <div>
                <label htmlFor=''>Featured Clients</label>
                <input type='text' name='fc_1' defaultValue={deets.feat_client.fc_1}/>
                <input type='text' name='fc_2' defaultValue={deets.feat_client.fc_2}/>
                <input type='text' name='fc_3' defaultValue={deets.feat_client.fc_3}/>
              </div>
            </div>
            <div>
              <label htmlFor=''>Codes and Certifications</label>
              <input type='text' name='cc_1' defaultValue={deets.codes_cert.cc_1}/>
              <input type='text' name='cc_2' defaultValue={deets.codes_cert.cc_1}/>
              <input type='text' name='cc_3' defaultValue={deets.codes_cert.cc_1}/>
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