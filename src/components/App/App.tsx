import { useEffect, useState } from 'react';
import { fetchImages }  from '../../image_api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import css from './App.module.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import NotFound from '../NotFound/NotFound';
import { data, image } from './App.types';

export default function App() {
  const [images, setImages] = useState<image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  const [imgUrl, setImgsUrl] = useState<string>("");
  const [showBtn, setShowBtn] = useState<boolean|number>(false)
  const [userName, setUserName] = useState<null|string>(null);
  const [likes, setLikes] = useState<null|number>(null);
  const [twitter, setTwitter] = useState<null|string>(null);
  const [instagram, setInstagram] = useState<null|string>(null);
  const [notFound, setNotFound] = useState<boolean>(false);
  

  

  const handleSearch = async (newQuery: string): Promise<void>=> {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }

  
  const handleLoadMore = ():void => {
      setPage(page+1)
  }

  useEffect(():void => {
    if (query === "") {
      return;
    }

  
    
    async function getImages<T extends data>():Promise<void> {
       try {
         setIsLoading(true);
         const data = await fetchImages<T>(query, page);
         const curentImages = data.results;
         setImages((prevImages) => { return [...prevImages, ...curentImages] });
         const totalPages = data.total_pages;
         setShowBtn(totalPages && totalPages !== page);
         setNotFound(curentImages.length === 0)
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false)
      }
    }
    getImages()
  }, [page, query])


  

  function openModal(url:string, likes: number, userName: string, socTwit: string, socInsta: string): void {
    setIsOpen(true);
    setImgsUrl(url);
    setUserName(userName);
    setLikes(likes);
    setTwitter(socTwit);
    setInstagram(socInsta);
    
  }


  function closeModal(): void {
    setIsOpen(false);
  }
    

  return (
    <>
      <SearchBar onSearch={ handleSearch} />
      <div className={css.container}>
        {images.length > 0 && <ImageGallery onClick={openModal} collection={images} />}
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
        {notFound && <NotFound />}
      </div>
      {images.length>0 && showBtn && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal image={imgUrl} like={likes} name={userName} twit={ twitter} insta={instagram} onOpen={IsOpen} onClose={closeModal} />
    </>
    
  );
}
