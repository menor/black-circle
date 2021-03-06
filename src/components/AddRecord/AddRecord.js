import React from 'react'
import {Heading} from 'rebass'
import take from 'lodash/take'
import {searchRecords} from '../../helpers/spotify.helpers'
import TextInput from '../TextInput'
import AddRecordSearchResults from '../AddRecordSearchResults'

function convertResultsFromSpotify(data) {
  const {items} = data.albums
  console.log(items)
  return items.map(item => ({
    artists: item.artists.map(artist => artist.name),
    title: item.name,
    thumb: item.images[1].url,
    year: item.release_date.split('-')[0],
    id: item.id
  }))
}

class AddRecord extends React.Component {
  state = {
    records: [],
  }

  setRecords = records => {
    this.setState({records: take(records, 5)})
  }

  fetchSearch = value => {
    searchRecords(value).then(res => {
      res.json().then(data => {
        this.setRecords(convertResultsFromSpotify(data))
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Heading mt={3} mb={2} fontSize={3}>
          Add a record
        </Heading>
        <TextInput
          mb={5}
          debounceTime={350}
          onChange={this.fetchSearch}
          placeholder="Search"
        />
        <AddRecordSearchResults
          onAdd={this.props.onAdd}
          records={this.state.records}
        />
      </React.Fragment>
    )
  }
}

export default AddRecord
