
import PropTypes from 'prop-types'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import { GalleryList } from './ImageGallery.styled'

export function ImageGallery({ images }) {
    const Elements = images.map(({ id, webformatURL, largeImageURL }) => {
        
        return (<ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL}  />)
    })
    return (
        <GalleryList>
        {Elements && Elements}  
        </GalleryList>
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    }))
}