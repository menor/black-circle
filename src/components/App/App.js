import React from 'react'
import {Provider, Drawer, Heading, Button} from 'rebass'
import AddRecord from '../AddRecord'
import Record from '../Record'

import { injectGlobal } from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
const mockRecordList = [
  {
    title: 'The Byrds - Sweetheart of the Rodeo',
    year: 1968,
    thumbUri: '',
    imageUri: '',
    spotifyUri: ''
  }
]

class App extends React.Component {
  state = {
    addRecord: false,
    recordList: mockRecordList
  }

  handleAddClick = () => {
    this.setState({addRecord: true})
  }

  handleDrawerButtonClick = () => {
    this.setState({addRecord: false})
  }

  addRecord = async discogsRecordId => {
    const record = await 
    this.setState(prev => ({recordList: [...prev.recordList, record]}))
  }

  render() {
    return (
      <Provider>
        <Heading>Black Circle</Heading>
        <Button onClick={this.handleAddClick}>Add</Button>
        {this.state.recordList.map(record => (<Record {...record} />))}
        <Drawer
          position="right"
          bg="white"
          color="black"
          pl={12}
          open={this.state.addRecord}>
          <AddRecord onAdd={this.addRecord}/>
          <Button ml='auto' mt={2} onClick={this.handleDrawerButtonClick}>Close</Button>
        </Drawer>
      </Provider>
    )
  }
}

export default App
