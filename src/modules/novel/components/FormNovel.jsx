import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatButton, TextField } from 'material-ui'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import Image from './../../shared/components/helpers/ImageInput'

import './../style/home.css'

class FormNovel extends Component {
  state = {
    name: '',
    description: '',
    author: '',
    translation_team: '',
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

  render () {
    const { imagePreviewUrl } = this.state

    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<Image src={imagePreviewUrl} className="team-page-img" circle />)
    }
    return (
      <SectionCentered>
        <TextField
          hintText="Nome"
        />
        <TextField
          hintText="Descrição"
        />
        <TextField
          hintText="Autor"
        />
        <TextField
          hintText="Time de Tradução"
        />
        <div className="image">
          {$imagePreview}
        </div>
        <div className="fileUpload btn btn-default">
          <span>Upload</span>
          <input type="file" className="upload" onChange={e => this.handleImageChange(e)} />
        </div>
        <FlatButton
          label='Enviar'
          backgroundColor="#D9D9D9"
          hoverColor="#B8B8B8"
          onClick={this.handleSubmit} />
      </SectionCentered>
    )
  }
}

FormNovel.propTypes = {
  logged: PropTypes.bool
}

export default FormNovel
