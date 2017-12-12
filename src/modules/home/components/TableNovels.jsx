import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import { RaisedButton, TextField } from 'material-ui'
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add'
import ActionEdit from 'material-ui/svg-icons/content/create'
import { fullWhite } from 'material-ui/styles/colors'

const styleButton = {
  margin: 5
}

const novels = [
  { id: 1, name: 'Tales of Demons and Gods', lastChapter: '370 - 6/12/2017' },
  { id: 3, name: 'A Will Eternal', lastChapter: '148 - 3/12/2017' }
]

class TableNovels extends Component {
  state = {
    novels: novels,
    searchedNovels: novels,
    searched: ''
  }

  handleChange = (event) => {
    const { value, name } = event.target
    const filter = this.state.novels.filter((novel) => {
      return novel.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
    })
    this.setState({
      searchedNovels: filter,
      [name]: value
    })
  }

  render () {
    const { searched, searchedNovels } = this.state
    return (
      <div className='home-box-left'>
        <TextField
          hintText='Pesquisar'
          fullWidth
          hintStyle={{ color: 'orange' }}
          name='searched'
          value={searched}
          onChange={this.handleChange}
        />
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
            {searchedNovels.map(novel => {
              return (
                <TableRow key={novel.id}>
                  <TableRowColumn>{novel.name}</TableRowColumn>
                  <TableRowColumn>{novel.lastChapter}</TableRowColumn>
                  <TableRowColumn>
                    <RaisedButton
                      backgroundColor='#00897B'
                      style={styleButton}
                      icon={<ActionEdit color={fullWhite} />}
                    />
                    <RaisedButton
                      style={styleButton}
                      icon={<ActionNoteAdd color={fullWhite} />}
                      backgroundColor='#a4c639'
                    />
                  </TableRowColumn>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default TableNovels
