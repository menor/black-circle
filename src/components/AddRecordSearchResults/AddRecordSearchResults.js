import React from 'react'
import AddRecordSearchResult from '../AddRecordSearchResult'

function AddRecordSearchResults({records}) {
  return records.map(record => (
    <AddRecordSearchResult {...record} />
  ))
}

export default AddRecordSearchResults
