import React from 'react';
import _ from 'underscore';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import fetchPosts from "../actions/fetchPosts";
import {bindActionCreators} from 'redux';

class Posts extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    renderPosts(){
        if(!this.props.posts || this.props.posts.length === 0){
            return <span>none</span>;
        }
        return _.map(this.props.posts, function(post){
            return <li key={post._id}>{post.title}</li>;
        });
    }
    render() {
        var numPosts = 0;
        if(this.props.posts){
            numPosts = this.props.posts;
        }
        return <div>
            Posts!
            <Link to="/new">Add new</Link>
            <ul>
                {this.renderPosts()}
            </ul>
        </div>
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({"fetchPosts": fetchPosts}, dispatch);
}

function mapStateToProps(state){
    return {
        "posts":state.posts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
