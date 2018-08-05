import React from 'react'
import {getEmbedablePlayer} from '../../helpers/spotify.helpers'

export default function SpotifyPlayer({id, title}) {
  return (
    <iframe
      title={title}
      src={getEmbedablePlayer(id)}
      width="264"
      height="324"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  )
}

