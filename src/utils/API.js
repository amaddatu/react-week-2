import axios from 'axios';

const API = {
    search: userInput => {
        return axios.get("https://dog.ceo/api/breed/"+ userInput + "/images");
    }
}

export default API;