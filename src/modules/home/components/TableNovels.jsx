import React, { Component } from 'react'
import { Col } from 'react-flexbox-grid'
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
  { id: 1, name: 'Tales of Demons and Gods', chapterNum: '370', lastChapterDate: '6/12/2017' },
  { id: 3, name: 'A Will Eternal', chapterNum: '148', lastChapterDate: '3/12/2017' }
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
      <Col xs={12} md={8} className='home-box-left'>
        <TextField
          hintText='Pesquisar'
          fullWidth
          hintStyle={{ color: 'grey' }}
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
              <TableHeaderColumn>Capítulo</TableHeaderColumn>
              <TableHeaderColumn>Data</TableHeaderColumn>
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
                  <TableRowColumn>{novel.chapterNum}</TableRowColumn>
                  <TableRowColumn>{novel.lastChapterDate}</TableRowColumn>
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
      </Col>
    )
  }
}

export default TableNovels
