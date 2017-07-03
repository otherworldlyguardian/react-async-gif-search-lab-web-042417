import React from 'react'

class GifSearch extends React.Component {
  constructor () {
    super()

    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.props.searchFunc}>
        <input
          type='text'
          name='search'
          onChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default GifSearch
