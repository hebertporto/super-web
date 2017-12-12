import React from 'react'
import { IconMenu, IconButton, MenuItem, FlatButton } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import history from './../../../../../config/utils/historyRouter'

import { buttonMenu } from './../../../style/inline/button'
import { HOME, LOGIN } from './../../../../../config/utils/routes'

const LoggedMenu = (props) => {
  return (
    <div>
      <div className='header-menu'>
        <FlatButton
          label='Home'
          style={buttonMenu}
          hoverColor='rgb(49, 131, 179)'
          onClick={() => history.push(HOME)}
        />
        <FlatButton
          label='Destaques'
          style={buttonMenu}
          hoverColor='rgb(49, 131, 179)'
          onClick={() => history.push(HOME)}
        />
        <FlatButton
          label='Usuários'
          style={buttonMenu}
          hoverColor='rgb(49, 131, 179)'
          onClick={() => history.push(HOME)}
        />
        <FlatButton
          label='Logout'
          style={buttonMenu}
          hoverColor='rgb(49, 131, 179)'
          onClick={() => history.push(LOGIN)}
        />
      </div>
      <div className='header-menu-mobile'>
        <IconMenu
          {...props}
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem
            primaryText='Home'
            onClick={() => history.push(HOME)}
          />
          <MenuItem
            primaryText='Destaques'
            onClick={() => history.push(HOME)}
          />
          <MenuItem
            primaryText='Usuários'
            onClick={() => history.push(HOME)}
          />
          <MenuItem
            primaryText='Logout'
            onClick={() => history.push(LOGIN)}
          />
        </IconMenu>
      </div>
    </div>
  )
}

export default LoggedMenu
