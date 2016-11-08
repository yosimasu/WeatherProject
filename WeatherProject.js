import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Forecast from './Forecast';

export default class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this._handleTextChange = this._handleTextChange.bind(this);
        this.state = {
            zip: '',
            forecast: null
        }
    }

    _handleTextChange(event) {
        let zip = event.nativeEvent.text;
        this.setState({
            zip: zip
        });
        fetch('http://api.openweathermap.org/data/2.5/weather?q='
            + zip + '&unit=imperial&APPID=ac72cee04a5d145a538b97fb645b20c9')
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    forecast: {
                        main: responseJSON.weather[0].main,
                        description: responseJSON.weather[0].description,
                        temp: responseJSON.main.temp
                    }
                });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = <Forecast
                main={this.state.forecast.main}
                description={this.state.forecast.description}
                temp={this.state.forecast.temp}
            />
        }
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}
                </Text>
                <TextInput
                    style={styles.input}
                    onSubmitEditing={this._handleTextChange}
                />
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4D4D',
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
