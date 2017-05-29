import React from 'react';
import _ from 'underscore';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

var _sum = function(a){
    return _.reduce(a, function(memo, num){ return memo + num; }, 0);
};

class Chart extends React.Component {
    render() {
        var avg = _sum(this.props.data) / this.props.data.length;
        return <div>
            <Sparklines height={120} width={200} data={this.props.data}>
                <SparklinesLine color="red"/>
                <SparklinesReferenceLine type="mean"/>
            </Sparklines>
            <span>{avg}</span>
        </div>
    }
}

export default Chart;
