import React from 'react'
import styled from 'styled-components'
import {Box, Subhead, Image} from 'rebass'
import SpotifyPlayer from '../SpotifyPlayer'

function Record({onClick, isSelected, artists, id, title, year, thumb}) {
  return isSelected ? (
    <SpotifyPlayer id={id} />
  ) : (
    <Box onClick={onClick} mb={4} mx={2} width='16em' color="gray.darker">
      <Image alt={title} src={thumb} />
      <Meta alignSelf="center" pt={2} pb={3}>
        <Subhead mb={1} color="gray.primary" fontWeight="normal" fontSize={1}>
          {artists[0]}
        </Subhead>
        <Subhead fontWeight="normal" fontSize={2}>
          {title}
        </Subhead>
      </Meta>
    </Box>
  )
}

const Meta = styled(Box)`
  background: ${p => p.theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-2em);
  }
`

export default Record

// Dark theme <Box mb={3} mx={1} width={300} bg='gray.darker' color='gray.light'>
