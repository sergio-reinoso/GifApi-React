// import React from 'react'
import { getGifs } from "../helpers/getGifs"

// eslint-disable-next-line react/prop-types
const GifGrid = ({category}) => {

  getGifs(category)

  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}

export default GifGrid
