import React, { Component } from 'react'
import { FlatButton, Dialog } from 'material-ui'
import { Row, Col } from 'react-flexbox-grid'

class DefaultMenu extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    const customContentStyle = {
      width: '100%',
      maxWidth: 'none'
    }
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ]
    return (
      <div>
        <FlatButton {...this.props} label="Login" onClick={this.handleOpen} />
        <Row>
          <Col mdOffset={4} xs={12} md={4}>
            <Dialog
              title="Dialog With Actions"
              actions={actions}
              modal={false}
              open={this.state.open}
              contentStyle={customContentStyle}
              onRequestClose={this.handleClose}
            >
                  The actions in this window were passed
            </Dialog>
          </Col>
        </Row>
      </div>
    )
  }
}

export default DefaultMenu
