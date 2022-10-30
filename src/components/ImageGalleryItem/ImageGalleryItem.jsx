
import PropTypes from 'prop-types'
// import styles from './ImageGalleryItem.module.css'
import { Image, ImageGalleryListItem } from './ImageListItem.styled'

export function ImageGalleryItem({ webformatURL, largeImageURL }) {
    return (
        <ImageGalleryListItem>
        <Image
          small={webformatURL}
        large={largeImageURL}
        />
      </ImageGalleryListItem>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    }