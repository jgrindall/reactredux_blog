import React from 'react';
import _ from 'underscore';
import {connect} from 'react-redux';
import savePost from "../actions/savePost";
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class NewPost extends React.Component {
    componentDidMount(){
        //this.props.fetchPosts();
    }
    constructor(props){
        super(props);
        this.state = {title:''};
    }
    onSubmit(e){
        e.preventDefault();
        this.props.savePost(this.state.title);
        this.setState({title:""});
    }
    onInputChange(e){
        this.setState({title:e.target.value});
    }
    render() {
        return <form onSubmit={this.onSubmit.bind(this)}>
            <div>
                <input value={this.state.title} onChange={this.onInputChange.bind(this)} type='text'/>
                <button>Save</button>
                <Link to="/">Cancel</Link>
            </div>
        </form>
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({"savePost": savePost}, dispatch);
}

function mapStateToProps(state){
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
