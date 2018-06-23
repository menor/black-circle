import React from 'react'
import {Provider, Drawer, Heading, Button} from 'rebass'
import AddRecord from '../AddRecord'

class App extends React.Component {
  state = {
    addRecord: false,
  }

  handleAddClick = () => {
    this.setState({addRecord: true})
  }

  handleDrawerButtonClick = () => {
    this.setState({addRecord: false})
  }

  render() {
    return (
      <Provider>
        <Heading>Black Circle</Heading>
        <Button onClick={this.handleAddClick}>Add</Button>
        <Drawer
          position="right"
          bg="white"
          color="black"
          pl={12}
          open={this.state.addRecord}>
          <AddRecord />
          <Button onClick={this.handleDrawerButtonClick}>Close</Button>
        </Drawer>
      </Provider>
    )
  }
}

export default App
