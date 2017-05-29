export default function weatherReducer(state, action){
    if(!state){
        state = [];
    }
    if(action.type === "FETCH_WEATHER"){
        state = state.concat([action.payload.data]);
    }
    return state;
};
