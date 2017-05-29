import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export default function (){
    var url = BASE_URL + "/posts";
    return {
        type:"FETCH_POSTS",
        payload:axios.get(url)
    };
};
