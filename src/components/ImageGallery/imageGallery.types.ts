import {image} from '../App/App.types';

export type imageGalleryProps = {
    collection: image[];
    onClick: (regular: string, likes: number, name: string, instagram_username: string, twitter_username: string) => void;
}