import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: ""
  };

  placeNameChangedHandler = (val) => {

    this.setState({
      placeName: val
    });
  };

  addPlaceNameHandler = () => {
    alert(this.state.placeName);
    this.setState({
      placeName: ""
    });
  };


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="An awasome place"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler} 
            style={styles.placeInput}/>

          <Button
            title="Add"
            onPress={this.addPlaceNameHandler} 
            style={styles.placeButton}/>
        </View>
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
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});
