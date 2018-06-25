import React from 'react'
import {Provider, Heading} from 'rebass'
import take from 'lodash/take'
import {DISCOGS_TOKEN} from '../../secret'
import TextInput from '../TextInput'
import AddRecordSearchResults from '../AddRecordSearchResults'

const DISCOGS_BASE_URL =
  'https://api.discogs.com/database/search?searchType=release&q='

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

class AddRecord extends React.Component {
  state = {
    records: [],
  }

  setRecords = (records) => {
    this.setState({records: take(records, 3)})
  }

  fetchSearch = (value) => {
    fetchRecords(value)
      .then(res => { res.json().then(data => {this.setRecords(data.results)})
    })
  }

  
  render() {
    return (
      <Provider>
        <Heading>Add a record</Heading>
        <TextInput debounceTime={350} onChange={this.fetchSearch} placeholder="Search" />
        <AddRecordSearchResults records={this.state.records} />
      </Provider>
    )
  }
}

export default AddRecord
