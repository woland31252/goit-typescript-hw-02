import ImageCard from '../ImageCard/ImageCard';
import { imageGalleryProps } from '../ImageGallery/imageGallery.types';
import css from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ collection, onClick}: imageGalleryProps) {
    return (
        <ul className={css.gallery}>
            {collection.map(collElem => (<li className={css.galleryItem} key={collElem.id}>
            <ImageCard onClick={onClick} card={collElem} /></li>))}
        </ul>
    
   ) 
    
}