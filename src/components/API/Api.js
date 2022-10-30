// import axios from 'axios'; 
// const API_KEY = '29488143-fc1f5e1ea256bfdc98e4452e8';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// export default async function getImages(query, page) {
//   try {
//     const response = await axios.get(
//       `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     // return response.data;
//       console.log(response.data)
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }


// const axios = require('axios').default;
// const BASE_URL = 'https://pixabay.com/api';
// const API_KEY = '29488143-fc1f5e1ea256bfdc98e4452e8';

// export async function fetchPicture(searchImages, page) {
//     try {
//         const images = await axios.get(
//             `${BASE_URL}/?q=${searchImages}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12` );
//         const response = await images.data;
//         return response;
//     } catch (error) {
//       if (error.response) {
//         throw new Error(error.response.status);
//       }
//     }
//   }


import axios from 'axios';

export const fetchPicture = async (value, page) => {
const API_KEY = '29488143-fc1f5e1ea256bfdc98e4452e8';
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  );
  return response.data.hits;
};
  