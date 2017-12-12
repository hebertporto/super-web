import React from 'react'
import { RaisedButton } from 'material-ui'

import history from './../../../config/utils/historyRouter'
import { NOVEL } from './../../../config/utils/routes'

import './../style/MenuLeft.css'

const MenuLeft = props => {
  return (
    <div className='menuleft-box'>
      <span>Menu Left</span>
      <RaisedButton
        label='Cadastrar Novel'
        fullWidth
        onClick={() => history.push(NOVEL)}
      />
    </div>
  )
}

export default MenuLeft
