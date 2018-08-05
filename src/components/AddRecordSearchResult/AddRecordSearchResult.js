import React from 'react'
import styled from 'styled-components'
import {Flex, Box, Text, Image, Label} from 'rebass'

function AddRecordSearchResult({onAdd, artists, title, thumb, year, id}) {
  return (
    <RecordBox
      p={2}
      onClick={() => {
        onAdd({artists: artists, title: title, thumb: thumb, year: year, id: id})
      }}>
      <Box width={1 / 3}>
        <Image alt={title} src={thumb} />
      </Box>

      <Box alignSelf="center" width={2 / 3} pl={2}>
        <Text key={artists[0]}>{artists[0]}</Text>
        <Text key={title}>{title}</Text>
        <Label mt={1}>{year}</Label>
      </Box>
    </RecordBox>
  )
}

const RecordBox = styled(Flex)`
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    background: 'gray';
    opacity: 1;
  }
`

export default AddRecordSearchResult
