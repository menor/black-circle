import {SPOTIFY_TOKEN} from '../secret'

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1/'
const SPOTIFY_SEARCH_ENDPOINT = SPOTIFY_BASE_URL + 'search?'

function getSearchEndpoint (query, type='album') {
 return `${SPOTIFY_SEARCH_ENDPOINT}query=${query}&type=${type}` 
}

const options = {
  /* mode: 'cors', */
  method: 'GET',
  headers: new Headers({
    Authorization: `Bearer ${SPOTIFY_TOKEN}`,
  }),
}

export async function searchRecords(str) {
  console.log('Fetching from spotify')
  const res = await fetch(getSearchEndpoint(str), options)
  return res
}
