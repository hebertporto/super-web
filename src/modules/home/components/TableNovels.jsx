import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import { RaisedButton } from 'material-ui'

const styleButton = {
  margin: 5
}

class TableNovels extends Component {
  render () {
    return (
      <Table>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Novel</TableHeaderColumn>
            <TableHeaderColumn>Último Capitulo</TableHeaderColumn>
            <TableHeaderColumn>Ações</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={false}
        >
          <TableRow>
            <TableRowColumn>Tales of Demons and Gods</TableRowColumn>
            <TableRowColumn> 370 - 6/12/2017</TableRowColumn>
            <TableRowColumn>
              <RaisedButton
                label='Default'
                style={styleButton} />
              <RaisedButton label='Primary' primary style={styleButton} />
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default TableNovels
