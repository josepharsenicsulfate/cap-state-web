import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function FormCCS() {

    const [ validated, setValidated ] = useState(false)
    const [ formData, updateFormData ] = useState('')

    const [ core_fields, setCore ] = useState([{c_core: ''}])

    const handleCoreFieldsChange = (index, event) => {
      let data = [...core_fields]
      data[index][event.target.name] = event.target.value
      setCore(data)
    }

    const addFields = () => {
      let newField = { c_core: ''}
      setCore([...core_fields, newField])
    }

    const removeFields = (index) => {
      let data = [...core_fields]
      if(core_fields.length > 1){
        data.splice(index, 1)
        setCore(data)
      }
    }

    const handleChange = async (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: await checkImage(e.target)
      })
      console.log(JSON.stringify(formData))
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      const form = event.currentTarget
      if(form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }
      setValidated(true)
      console.log(JSON.stringify(formData))
    }

    const addNewField = (e) => {
      const parent = e.target.parentElement.parentElement
      console.log(parent)
    }

    const delNewField = (e) => {
      const parent = e.target.parentElement.parentElement
      console.log(parent)
    }

    const checkImage = async (hasImage) => {
      return hasImage.name === 'c_logo' ? await getImage(hasImage.files[0]) : hasImage.value.trim()
    }

    const getImage = async (image) => {
      return await convertBase64(image)
    }
  
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
  
        fileReader.onload = () => {
          resolve(fileReader.result)
        }
  
        fileReader.onerror = (error) => {
          reject(error)
        }
      })
    }

    const download = (e) => {
      e.preventDefault()
      const base_width = document.querySelector('.download-ccs').offsetWidth
      const base_height = document.querySelector('.download-ccs').offsetHeight
      const domElement = document.querySelector('.download-ccs')
      html2canvas(domElement)
      .then((canvas) => {
        const px2in = 0.0104166667
        const size = {
          width: base_width*px2in,
          height: base_height*px2in
        }
        const img = canvas.toDataURL('image/jpeg')
        const pdf = new jsPDF('p', 'in', [size.width, size.height])
        pdf.addImage(img, 'JPEG', 0, 0, size.width, size.height)
        pdf.save('test-ccs.pdf')
      })
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Container className='text-dark'>
            <Row>
              <Col 
                className='px-0 py-2' 
                lg={6}>
                <Form.Control 
                  name='c_name' 
                  onChange={handleChange} 
                  placeholder='Company Name'/>
              </Col>
              <Col 
                className='px-0 py-2' 
                lg={6}>
                <Form.Control 
                  name='c_logo' 
                  onChange={handleChange} 
                  placeholder='Company Logo' 
                  type='file'/>
              </Col>
            </Row>
            <Row>
              <Col 
                className='px-0' 
                lg={12}>
                <Form.Control 
                  name='c_desc' 
                  onChange={handleChange} 
                  placeholder='Company Desc' 
                  as='textarea' 
                  rows={3}/>
              </Col>
            </Row>
            <Row className='p-0 justify-content-center'>
              {
                core_fields.map((input, index) => {
                  return(
                      <Row className='p-0' key={index}>
                        <Col 
                          className='px-0 py-2' 
                          xs={9} lg={9}>
                          <Form.Control 
                            name='c_core' 
                            onChange={event => handleCoreFieldsChange(index, event)} 
                            placeholder='Core Competencies' 
                            value={input.c_core} />
                        </Col>
                        <Col 
                          className='px-0 py-2 btn-group' 
                          xs={3} 
                          lg={3}>
                          <Button 
                            variant="outline-success" 
                            className='btn fs-6' 
                            onClick={addFields}>+</Button>
                          <Button 
                            variant="outline-danger" 
                            className='btn fs-6' 
                            onClick={() => {removeFields(index)}}>-</Button>
                        </Col>
                      </Row>
                  )
                })
              }
            </Row>
            <Row>
              <Col className='px-0 py-2' xs={9} lg={9}><Form.Control name='c_pp_1' onChange={handleChange} placeholder='Past Performances'/></Col>
              <Col className='px-0 py-2 btn-group' xs={3} lg={3}>
                <Button variant="outline-success" className='btn fs-6' onClick={addNewField}>+</Button>
                <Button variant="outline-danger" className='btn fs-6' onClick={delNewField}>-</Button>
              </Col>
            </Row>
            <Row>
              <Col className='px-0 py-2' xs={9} lg={9}><Form.Control name='c_pc_1' onChange={handleChange} placeholder='Past Clients'/></Col>
              <Col className='px-0 py-2 btn-group' xs={3} lg={3}>
                <Button variant="outline-success" className='btn fs-6' onClick={addNewField}>+</Button>
                <Button variant="outline-danger" className='btn fs-6' onClick={delNewField}>-</Button>
              </Col>
            </Row>
            <Row>
              <Col className='px-0 py-2' xs={9} lg={9}><Form.Control name='c_cd_1' onChange={handleChange} placeholder='Company Differentiators'/></Col>
              <Col className='px-0 py-2 btn-group' xs={3} lg={3}>
                <Button variant="outline-success" className='btn fs-6' onClick={addNewField}>+</Button>
                <Button variant="outline-danger" className='btn fs-6' onClick={delNewField}>-</Button>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col xs={{ span: 3 }} lg={{ span: 3 }} className='btn-group-vertical'>
                <Button variant='success' className='mt-2' type='submit'>Save</Button>
                <Button variant='success' className='mt-2' onClick={download}>Download</Button>
              </Col>
            </Row>
          </Container>
        </Form>
    )
}

export default FormCCS