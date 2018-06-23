import React from 'react'
import {func, number, string} from 'prop-types'
import {Input} from 'rebass'
import debounce from 'lodash.debounce'

class TextInput extends React.Component {
  static propTypes = {
    debounceTime: number,
    onChange: func,
    placeholder: string,
  }

  static defaultProps = {
    debounceTime: 0,
    onChange: function() {},
  }

  debouncedOnChange = debounce(this.props.onChange, this.props.debounceTime)

  render() {
    return (
      <Input
        onChange={ev => this.debouncedOnChange(ev.target.value)}
        placeholder={this.props.placeholder}
      />
    )
  }
}

export default TextInput
