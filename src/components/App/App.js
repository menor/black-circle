import React from 'react'
import {Provider, Drawer, Heading, Button} from 'rebass'
import AddRecord from '../AddRecord'
import Record from '../Record'

import {injectGlobal} from 'styled-components'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
const mockRecordList = [
  {
    title: 'The Smoke Of Hell',
    thumb: 'https://i.scdn.co/image/d300f644e9b40a6c4783d6acc7d34a0754ba66cb',
    year: '1992-09-15',
  },
  {
    title: 'Scandalous (Deluxe Version)',
    thumb: 'https://i.scdn.co/image/459c1b28bed87a08d229ee47d1400ff33e948313',
    year: '2011-01-01',
  },
  {
    title: 'The Latest Menace to the Human Race',
    thumb: 'https://i.scdn.co/image/c969926cae3bef095bdcb31fe4bf1f8f61567b8d',
    year: '2007-05-01',
  },
  {
    title: 'Third Eye Surgery',
    thumb: 'https://i.scdn.co/image/4c0b91fdcff0443083d8c1dfa433e03c5e6342cb',
    year: '2012-04-16',
  },
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

  addRecord = record => {
    this.setState(prev => ({recordList: [...prev.recordList, record]}))
  }

  render() {
    return (
      <Provider>
        <Heading>Black Circle</Heading>
        <Button onClick={this.handleAddClick}>Add</Button>
        {this.state.recordList.map(record => <Record {...record} />)}
        <Drawer
          position="right"
          bg="white"
          color="black"
          pl={12}
          open={this.state.addRecord}>
          <AddRecord onAdd={this.addRecord} />
          <Button ml="auto" mt={2} onClick={this.handleDrawerButtonClick}>
            Close
          </Button>
        </Drawer>
      </Provider>
    )
  }
}

export default App
