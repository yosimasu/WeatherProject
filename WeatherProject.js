import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

export default class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this._handleTextChange = this._handleTextChange.bind(this);
        this.state = {
            zip: '',
        }
    }

    _handleTextChange(event) {
        console.log(event.nativeEvent.text);
        this.setState({
           zip: event.nativeEvent.text
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}
                </Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
    },
});
