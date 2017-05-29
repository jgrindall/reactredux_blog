import React from 'react';
import {connect} from 'react-redux';
import selectCity from "../actions/selectCity";
import Chart from "../components/Chart";
import Map from "../components/Map";
import _ from 'underscore';
import {bindActionCreators} from 'redux';

var _getChart = function(data){
    var temps = _.map(data, function(d){
        return d.main.temp;
    });
    return <Chart data={temps}/>
}

var _getMap = function(data){
    return <Map coord={data.city.coord}/>
}

class WeatherList extends React.Component {
    onClick(city){
        //this.props.selectBook(book);
    }
    renderList(){
        console.log(this.props.weather);
        var _this = this;
        return this.props.weather.map(function(weatherData){
            console.log(weatherData);
            return <tr key={weatherData.city.name}>
                <td>{weatherData.city.name}</td>
                <td>{_getChart(weatherData.list)}</td>
                <td className="map">{_getMap(weatherData)}</td>
            </tr>;
        });
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Map</th>
                    </tr>
                </thead>
                <tbody>
                {this.renderList()}
                </tbody>
            </table>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({"selectCity": selectCity}, dispatch);
}

function mapStateToProps(state){
    return {
        "weather":state.weather
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
