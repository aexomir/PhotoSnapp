import React, {useContext, useEffect} from 'react';
import {PhotoContext} from '../contextAPI/photoContextApi';
import {View} from 'react-native';
import Loader from './Loader';
import Gallery from './Gallery';

const Container = ({searchTerm}) => {
  const {images, loading, runSearch} = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm, runSearch]);

  return <View>{loading ? <Loader /> : <Gallery data={images} />}</View>;
};
export default Container;
