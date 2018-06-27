import React from 'react'
import AddRecordSearchResult from '../AddRecordSearchResult'


function AddRecordSearchResults({records, onAdd}) {
  return records.map(record => (
    <AddRecordSearchResult onAdd={onAdd} {...record} />
  ))
}

export default AddRecordSearchResults
