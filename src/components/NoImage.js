import React from 'react';
import {View, StyleSheet} from 'react-native';

const NoImages = () => {
  return (
    <View style={styles.container}>
      <h2>No Images Found</h2>
      <p>Please try a different search term</p>
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
export default NoImages;
