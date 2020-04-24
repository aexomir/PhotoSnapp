import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
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
export default Loader;
