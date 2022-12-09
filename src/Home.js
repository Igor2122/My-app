import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Art from './Art';
import Pagination from './Pagination';

function App() {
  const [arts, setArts] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [artsPerPage] = useState(25);

  useEffect(() => {
    const fetchArts = async () => {
      setLoading(true);
      const result = await axios.get("https://api.artic.edu/api/v1/artworks?page=2&limit=100&&fields=id,title,image_id");
      setArts(result.data.data);
      setLoading(false);
     
    }
    fetchArts();
  }, []);

  //Get current arts
  const indexOfLastArt = currentPage + artsPerPage;
  const indexOfFirstArt = indexOfLastArt - artsPerPage;
  const currentArts = arts.slice(indexOfFirstArt, indexOfLastArt);

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  const addFavouriteArt = (art) => {
    const newFavouriteList = [...favourites, art];
    setFavourites(newFavouriteList);
    console.log(newFavouriteList)
  }

  return (
    <div className='container'>
      <h1 className='text-warning'>Art Gallery</h1>
      <Art 
        arts={currentArts} 
        loading={loading}
        handleFavouritesClick={addFavouriteArt}/>
        
      <Pagination 
        artsPerPage={artsPerPage} 
        totalArts={arts.length} 
        paginate={paginate}/>
      
    </div>
  );
}

export default App;
