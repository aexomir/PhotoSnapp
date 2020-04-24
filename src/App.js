import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PhotoContextProvider from './contextAPI/photoContextApi';
import {Route, BrowserHistory, Redirect, Switch} from 'react-router-dom';
import Header from './components/Header';
import Item from './components/Item';
import Search from './components/Search';

class App extends Component {
  handleSumbit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };
  render() {
    return (
      <PhotoContextProvider>
        <BrowserHistory
          basename="/SnapScout"
          getUserConfirmation={(message, callback) => {
            // eslint-disable-next-line no-alert
            const allowtransition = window.confirm(message);
            callback(allowtransition);
          }}>
          <View style={styles.container}>
            <Route
              render={props => {
                <Header
                  handleSumbit={this.handleSumbit}
                  history={props.history}
                />;
              }}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />
              <Route
                exact
                path="/mountain"
                render={() => <Item searchTerm="mountain" />}
              />
              <Route
                exact
                path="/beach"
                render={() => <Item searchTerm="beach" />}
              />
              <Route
                exact
                path="/bird"
                render={() => <Item searchTerm="bird" />}
              />
              <Route
                exact
                path="/food"
                render={() => <Item searchTerm="food" />}
              />
              <Route
                path="/search/:searchInput"
                render={props => {
                  <Search searchTerm={props.match.params.searchInput} />;
                }}
              />
            </Switch>
            <Text style={styles.header}>Photos</Text>
          </View>
        </BrowserHistory>
      </PhotoContextProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
