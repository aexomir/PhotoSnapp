import React from 'react';
import {View} from 'react-native';
import Container from './Container';

const Search = ({searchTerm}) => {
  return (
    <View>
      <h2>{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </View>
  );
};
export default Search;
