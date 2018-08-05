import {LOCAL_STORAGE_DATA_KEY} from '../constants'

export const getInitialState = defaultState => {
  // If local storage data is present we will use that
  // If not and a default state is passed we use it
  // This probably won't be needed if we switch to redux
  // and differentiate between interface and data
  const initialState =
   JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) ||
    defaultState ||
    {}

  return initialState
}

export const updateLocalStorage = value => {
  value !== null
    ? localStorage.setItem(LOCAL_STORAGE_DATA_KEY, value)
    : localStorage.removeItem(LOCAL_STORAGE_DATA_KEY)
}
