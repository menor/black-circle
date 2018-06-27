import React from 'react'
import {Heading} from 'rebass'
import take from 'lodash/take'
import {searchRecords} from '../../helpers/discogs.helpers'
import TextInput from '../TextInput'
import AddRecordSearchResults from '../AddRecordSearchResults'

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
        this.setRecords(data.results)
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Heading mt={3} fontSize={3}>
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
