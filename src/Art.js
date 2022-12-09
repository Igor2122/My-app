import { useState } from "react";
import Search from "./Search";


function Art({ arts, loading, handleFavouritesClick}) {
  const [inputText, setInputText] = useState('');


  if (loading) {
    return <h2>Loading...</h2>;
  }

    return(
      <div>
        <Search setState={setInputText}/>
      <div className='wrapper'> 
        {arts.filter(art => art.title.toLowerCase().includes(inputText)).map(art => (
          <div className='exhibit' key={art.id}>
            <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} alt={art.title} width="300px" />
            <p>{art.title}</p>
            <button className="btn btn-secondary" onClick={() => handleFavouritesClick(art)}>Add to favourite 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="red" 
                class="bi bi-heart-fill" 
                viewBox="0 0 16 16">
                <path 
                  fill-rule="evenodd" 
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
            </button>
          </div>
          
        ))}
      </div>    
      </div> 
    )
  }
  
  export default Art;