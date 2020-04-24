import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Container from './Container';

const Item = ({searchTerm}) => {
  return (
    <View style={styles.Container}>
      <Text>{searchTerm} Photos</Text>
      <Container searchTerm={searchTerm} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Item;
