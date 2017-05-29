import axios from 'axios';

export default function (city){
    var url = "http://api.openweathermap.org/data/2.5/forecast?appid=04371b50c8782ee6aebab2130b1e6977&q="+city+",uk";
    return {
        type:"FETCH_WEATHER",
        payload:axios.get(url)
    };
};
