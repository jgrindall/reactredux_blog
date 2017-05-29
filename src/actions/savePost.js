import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export default function (title){
    var url = BASE_URL + "/post", data = {"title":title};
    return {
        type:"SAVE_POST",
        payload:axios.post(url, data)
    };
};
