import _ from 'underscore';

export default function postsReducer(state, action){
    if(!state){
        state = {};
    }
    if(action.type === "FETCH_POSTS"){
        var posts, clone, newData;
        posts = action.payload.data;
        clone = JSON.parse(JSON.stringify(state));
        newData = {};
        _.each(posts, function(post){
            newData[post._id] = post;
        });
        state = _.extend(clone, newData);
    }
    return state;
};
