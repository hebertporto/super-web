import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { RaisedButton } from 'material-ui'
import { ValidatorForm } from 'react-form-validator-core'
import { TextValidator } from 'react-material-ui-form-validator'
import { teal300 } from 'material-ui/styles/colors'
import ActionHome from 'material-ui/svg-icons/action/home'

import SectionCentered from './../../shared/components/grid/SectionCentered'

import './../style/FormNovel.css'

class FormNovel extends Component {
  state = {
    name: '',
    description: '',
    author: '',
    translationTeam: '',
    file: '',
    imagePreviewUrl: ''
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    console.log('form', this.state)
  }

  handleImageChange (e) {
    e.preventDefault()

    const reader = new FileReader()
    const file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result
      })
    }
    console.log('opsss')
    reader.readAsDataURL(file)
  }

  render () {
    const { name, description, author, translationTeam } = this.state

    return (
      <SectionCentered>
        <h1>Cadastrar Novel</h1>
        <ValidatorForm
          ref='form'
          className='fn-box'
          onSubmit={this.handleSubmit}
          onError={errors => console.log(errors)}
        >
          <TextValidator
            floatingLabelText='Nome da Novel'
            onChange={this.handleChange}
            name='name'
            value={name}
            validators={['required']}
            errorMessages={['Esse campo é obrigatório']}
          />
          <TextValidator
            floatingLabelText='Descrição'
            onChange={this.handleChange}
            name='description'
            rows={6}
            value={description}
            validators={['required']}
            errorMessages={['Esse campo é obrigatório']}
          />
          <TextValidator
            floatingLabelText='Autor'
            onChange={this.handleChange}
            name='author'
            value={author}
            validators={['required']}
            errorMessages={['Esse campo é obrigatório']}
          />
          <TextValidator
            floatingLabelText='Projeto Reponsável'
            onChange={this.handleChange}
            name='translationTeam'
            value={translationTeam}
            validators={['required']}
            errorMessages={['Esse campo é obrigatório']}
          />
        </ValidatorForm>
        <RaisedButton
          type='submit'
          backgroundColor={teal300}
          label="Criar"
          fullWidth={false}
          style={{ marginTop: 20 }}
          labelColor='#ffffff'
        />
      </SectionCentered>
    )
  }
}

FormNovel.propTypes = {
  logged: PropTypes.bool
}

export default FormNovel
