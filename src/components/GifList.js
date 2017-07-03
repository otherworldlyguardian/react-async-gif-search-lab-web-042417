import React from 'react'

const GifList = ({pic}) => {
  return (
    <li>
      <img src={pic.embed_url} alt={pic.slug} />
    </li>
  )
}

export default GifList
