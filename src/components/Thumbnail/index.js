import './index.css'

const Thumbnail = props => {
  const {eachThumbnail, clickThumbnail, randomImageId} = props
  const {thumbnailUrl, id} = eachThumbnail

  const onClickThumbnail = () => {
    clickThumbnail(id, randomImageId)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default Thumbnail
