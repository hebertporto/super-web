import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

const SectionCentered = (props) => {
  return (
    <Grid fluid>
      <Row>
        <Col mdOffset={1} xs={12} md={8}>
          <Row>
            {props.children}
          </Row>
        </Col>
      </Row>
    </Grid>
  )
}

export default SectionCentered
