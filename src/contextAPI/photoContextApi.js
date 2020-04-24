import React, {createContext, useState} from 'react';
import axios from 'axios';
import apikey from '../components/config';
export const PhotoContext = createContext();

const PhotoContextApi = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = query => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`,
      )
      .then(response => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log(`Encountered Following Error: ${error}`);
      });
  };
  return (
    <PhotoContext.Provider value={(images, loading, runSearch)}>
      {props.children}
    </PhotoContext.Provider>
  );
};
export default {PhotoContextApi};
