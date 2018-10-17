import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class PlaceInput extends Component {

    state = {
        placeName: ""
    };

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
        // this.setState({
        //     placeName: ""
        // });
    };

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="An awasome place"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput} />

                <Button
                    title="Add"
                    onPress={this.placeSubmitHandler}
                    style={styles.placeButton} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
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
    }
});

export default PlaceInput;