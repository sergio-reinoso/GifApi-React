import PropTypes  from 'prop-types'

// eslint-disable-next-line react/prop-types
export const GifItem = ({title, url, id}) => {

  return (
    <div className='card'>
      <img src={url} alt={title} ></img>
      <p>{title}</p>
    </div>
  )
}

GifItem.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

