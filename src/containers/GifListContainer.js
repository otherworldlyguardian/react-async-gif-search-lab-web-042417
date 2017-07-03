import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor () {
    super()

    this.state = ({
      picList: []
    })
    this.searchFunc = this.searchFunc.bind(this)
  }

  searchFunc (event) {
    event.preventDefault()
    fetch('http://api.giphy.com/v1/gifs/search?q=' + event.target.search.value + '&api_key=dc6zaTOxFJmzC')
    .then(resp => resp.json())
    .then(data => data['data'])
    .then(data => this.setState({
      picList: data.slice(0, 3)
    }))
  }

  render () {
    debugger
    return (
      <div>
        <GifSearch searchFunc={this.searchFunc} />
        <ul>
          {this.state.picList.map(picture => <GifList pic={picture} />)}
        </ul>
      </div>
    )
  }
}

export default GifListContainer
