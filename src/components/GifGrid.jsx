
import { useEffect } from "react"
import { getGifs } from "../helpers/getGifs"
import { useState } from "react"
import GifItem from "./GifItem"

// eslint-disable-next-line react/prop-types
const GifGrid = ({category}) => {

  const [images, setImages] = useState([])

  const getImages = async() => {
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect( () => {
     getImages()
  }, [])

  return (
    <div>

      <h3>{category}</h3>

      <ol>
        {
          images.map(({id, title}) => (
            <GifItem />
          ))
        }
      </ol>

    </div>
  )
}


export default GifGrid