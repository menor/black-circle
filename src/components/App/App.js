// TODO:
//   - Local Storage
//   - Remove unneded from local storage
//   - Authentication
//   - Move Drawer to its own file
//   - Style Results

// FEATURES:
//   - Drag Drop albums to reorder
//   - Tracklists
//   - Public and private lists

import React from 'react'
import {Flex, Provider, Drawer, Heading, ButtonOutline} from 'rebass'
import {getInitialState, updateLocalStorage} from '../../helpers/localStorage.helpers'
import AddRecord from '../AddRecord'
import Record from '../Record'

import styled, {injectGlobal} from 'styled-components'
import {theme} from '../../constants'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`
const mockRecordList = [
  {
    artists: ['Supersuckers'],
    title: 'The Smoke Of Hell',
    thumb: 'https://i.scdn.co/image/d300f644e9b40a6c4783d6acc7d34a0754ba66cb',
    year: '1992',
    id: '2CHhFP8WLu5sj1YXBRM5A0',
  },
  {
    artists: ['Black Joe Lewis & the Honeybears'],
    title: 'Scandalous (Deluxe Version)',
    thumb: 'https://i.scdn.co/image/459c1b28bed87a08d229ee47d1400ff33e948313',
    year: '2011',
    id: '6FbPo7CMJIikS1y7EvaWzs',
  },
  {
    artists: ['The Neanderthals'],
    title: 'The Latest Menace to the Human Race',
    thumb: 'https://i.scdn.co/image/c969926cae3bef095bdcb31fe4bf1f8f61567b8d',
    year: '2007',
    id: '0YHaFQbQEkIZ4EwyVDpiC7',
  },
  {
    artists: ['Baby Woodrose'],
    title: 'Third Eye Surgery',
    thumb: 'https://i.scdn.co/image/4c0b91fdcff0443083d8c1dfa433e03c5e6342cb',
    year: '2012',
    id: '3wCgIbxcqbMk2Gl6GgMMd0',
  },
]

class App extends React.Component {
  state = getInitialState({
    addRecord: false,
    recordList: mockRecordList,
    selected: void 0,
  })

  handleAddClick = () => {
    this.setState({addRecord: true})
  }

  handleDrawerButtonClick = () => {
    this.setState({addRecord: false})
  }

  addRecord = record => {
    this.setState(prev => ({recordList: [...prev.recordList, record]}))
  }

  handleRecordClick = idx => {
    this.setState({selected: idx})
  }

  componentDidUpdate() {
    updateLocalStorage(JSON.stringify(this.state))    
  }

  render() {
    return (
      <Provider theme={theme}>
        <Flex
          p={2}
          bg="gray.darker"
          color="white"
          justifyContent="space-between">
          <Heading fontSize={4}>Black Circle</Heading>
          <CustomButton
            color={theme.colors.gray.light}
            onClick={this.handleAddClick}>
            Add
          </CustomButton>
        </Flex>
        <Flex
          mx="auto"
          width={['20rem', '38em', 1]}
          pt={3}
          bg="white"
          justifyContent="space-around"
          flexWrap="wrap">
          {this.state.recordList.map((record, idx) => (
            <Record
              onClick={() => {
                this.handleRecordClick(idx)
              }}
              isSelected={this.state.selected === idx}
              {...record}
            />
          ))}
        </Flex>
        <Drawer
          position="right"
          bg="white"
          color="gray.dark"
          open={this.state.addRecord}>
          <Flex px={3} flexDirection="column" align="flex-end">
            <AddRecord onAdd={this.addRecord} />
            <CustomButton
              ml="auto"
              mt={2}
              onClick={this.handleDrawerButtonClick}>
              Close
            </CustomButton>
          </Flex>
        </Drawer>
      </Provider>
    )
  }
}

const CustomButton = styled(ButtonOutline)`
  color: ${p => p.theme.colors.gray.light};
`
export default App
