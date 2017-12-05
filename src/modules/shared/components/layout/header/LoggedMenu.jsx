import React from 'react'
import { IconMenu, IconButton, MenuItem } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
const LoggedMenu = (props) => {
  return (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem primaryText='Refresh' />
      <MenuItem primaryText='Help' />
      <MenuItem primaryText='Sign out' />
    </IconMenu>
  )
}

export default LoggedMenu
