import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'f6eb8b177e19fc0b5933ba47079225b7',
        language: 'es-ES'
    }
});

export default movieDB;