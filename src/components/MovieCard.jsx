import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null; // skip rendering if path is invalid
    console.log("Image URL:", IMG_CDN_URL + posterPath);


    return (
      <div className="w-48 pr-4">
        <img
          alt="movie"
          src={IMG_CDN_URL + posterPath}
        />
      </div>
    );
  };

export default MovieCard;
