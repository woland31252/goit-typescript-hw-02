import ImageCard from '../ImageCard/ImageCard';
import css from '../ImageCard/ImageCard.module.css';

export default function ImageGallery({ collection, onClick}) {
    return (
        <ul className={css.gallery}>
            {collection.map(collElem => (<li className={css.galleryItem} key={collElem.id}>
            <ImageCard onClick={onClick} card={collElem} /></li>))}
        </ul>
    
   ) 
    
}