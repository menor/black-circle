import React from 'react'
import {Provider, Heading, Input, Button} from 'rebass'

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Heading>Black Circle</Heading>
        <Input placeholder='Search' />
        <Button>Click!</Button>
      </Provider>
    )
  }
}

export default App
