import React from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';
import fetchWeather from '../actions/fetchWeather';
import {bindActionCreators} from 'redux';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term:''};
    }
    onSubmit(e){
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:""});
    }
    onInputChange(e){
        this.setState({term:e.target.value});
    }
    render() {
        return <form onSubmit={this.onSubmit.bind(this)}>
            <div>
                <span>Search</span>
                <input value={this.state.term} onChange={this.onInputChange.bind(this)} type='text'/>
                <button type='submit'>Search</button>
            </div>
        </form>
    }
}

function mapStateToProps(state){
    return {

    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({'fetchWeather':fetchWeather}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);
