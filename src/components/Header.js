import React from 'react';
import Form from './Form';
import Navigation from './Navigation';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({handleSubmit, history}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>PhotosSearch</Text>
      <Form submit={handleSubmit} history={history} />
      <Navigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
  },
});

export default Header;
