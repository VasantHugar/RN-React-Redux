import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/yoga-1.png'

import { Provider, connect } from 'react-redux';
import { addPlace, deletePlace } from './src/store/actions/index';
import configureStore from './src/store/configureStore';

class App extends React.Component {

  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeleteHandler = key => {
    this.props.onDeletePlace(key);
  };

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemDeleted={this.placeDeleteHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
  };
}

const mapDispatchToProps = dispatch => {

  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

const ConnectedAppScreen = connect(mapStateToProps, mapDispatchToProps)(App);

export default class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <ConnectedAppScreen />
      </Provider>
    );
  }
}