import axios from "axios";


const Base_Url = "https://api.themoviedb.org/3";

const TMBD_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWY5NjlkY2YzNGRmNzVlNmIxY2IyNzVlYjk3OGEwZiIsInN1YiI6IjY1MWYwOGQ0NzQ1MDdkMDBjNTdhNjAyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sR_u299vt9TXP9cAnDa8bWgXtfgo_4boK8j0djPgp_g";

const headers = {
    Authorization: "bearer " + TMBD_TOKEN,
}

export const fetchDataFromApi = async (url, params) => {

    try {
        
        const { data } = await axios.get(`${Base_Url}${url}`, {
            headers,
            params,
          });
          
        return data;

    } catch (error) {

        console.log(error);
        
    }
}