import {DISCOGS_TOKEN} from '../secret'

const DISCOGS_BASE_URL = 'https://api.discogs.com/'
const DISCOGS_SEARCH_ENDPOINT = DISCOGS_BASE_URL + 'database/search?'

function getSearchEndpoint (query, type='release') {
 return `${DISCOGS_SEARCH_ENDPOINT}searchType=${type}&q=${query}` 
}

const options = {
  mode: 'cors',
  method: 'GET',
  headers: new Headers({
    Authorization: `Discogs token=${DISCOGS_TOKEN}`,
  }),
}

export async function searchRecords(str) {
  console.log('Fetching')
  const res = await fetch(getSearchEndpoint(str), options)
  return res
}
