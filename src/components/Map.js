import React from 'react';
import _ from 'underscore';

class Map extends React.Component {
    componentDidMount(){
        console.log(this.props);
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center:{
                lat:this.props.coord.lat,
                lng:this.props.coord.lon
            }
        });
    }
    componentWillUnmount(){
        //destroy the map
    }
    render() {
        return <div ref="map">
        </div>
    }
}

export default Map;
