import React from 'react'
import {Provider, Heading, Input} from 'rebass'
import debounce from 'lodash.debounce'

const DISCOGS_BASE_URL =
  'https://api.discogs.com/database/search?searchType=all&q='

const options = {
  mode: 'cors',
  headers: new Headers({
    Authorization: `Discogs token=${DISCOGS_TOKEN}`,
  }),
}

async function fetchRecords(str) {
  console.log('Fetching')
  const res = await fetch(DISCOGS_BASE_URL + str, options)
  return res
}

class App extends React.Component {
  state = {
    records: [],
  }

  debouncedInputChange = debounce(this.emitInputChange, 300)

  emitInputChange (value) {
    fetchRecords(value).then(res => {
      res.json().then(data => this.setState({records: data.results}))
    })
  }

  handleInputChange = (e) => {
    this.debouncedInputChange(e.target.value)
  }

  render() {
    return (
      <Provider>
        <Heading>Black Circle</Heading>
        <Input onChange={this.handleInputChange} placeholder="Search" />
        {this.state.records.map(record => (
          <React.Fragment>
            <p key={record.title}>{record.title}</p>
            <img src={record.cover_image} />
          </React.Fragment>
        ))}
      </Provider>
    )
  }
}

export default App
