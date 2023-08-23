import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = 'api_key=7d0a5671b3bac0f4af8c650bfdc346ed';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  let response = '';
  
  try {
    response = await axios.get(
      `${BASE_URL}/trending/movie/day?${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure("Oops... I did it again.");
    console.log(error);
  }
}

export async function getMovieInfo(id) {
  let response = '';
  
  try {
    response = await axios.get(
      `${BASE_URL}/movie/${id}?${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure("Oops... I did it again.");
    console.log(error);
  }
}

export async function getMovieReviews(id) {
  let response = '';
  
  try {
    response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure("Oops... I did it again.");
    console.log(error);
  }
}

export async function getMovieCast(id) {
  let response = '';
  
  try {
    response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure("Oops... I did it again.");
    console.log(error);
  }
}

export async function getSearchMovies(query) {
  let response = '';
  
  try {
    response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&${API_KEY}`
    );
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure("Oops... I did it again.");
    console.log(error);
  }
}
