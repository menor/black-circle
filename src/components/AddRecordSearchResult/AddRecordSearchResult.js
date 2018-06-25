import React from 'react'
import {Row, Image, Label, Column} from 'rebass'

function AddRecordSearchResult ({title, thumb, year}) {
  return (
    <Row>
      <Column w={1/3}>
      <Image alt={title} src={thumb} />
      </Column>
      <Column>
      <p key={title}>{title}</p>

      <Label>{year}</Label>
      </Column>
    </Row>
  )
}

export default AddRecordSearchResult
