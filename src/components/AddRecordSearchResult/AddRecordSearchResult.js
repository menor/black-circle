import React from 'react'
import styled from 'styled-components'
import {Flex, Box, Text, Image, Label} from 'rebass'

function AddRecordSearchResult({onAdd, title, thumb, year}) {
  return (
    <RecordBox p={2} onClick={() => {onAdd({title: title, thumb: thumb, year: year})}}>
      <Box width={1 / 3}>
        <Image alt={title} src={thumb} />
      </Box>

      <Box alignSelf="center" width={2 / 3} pl={2}>
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
