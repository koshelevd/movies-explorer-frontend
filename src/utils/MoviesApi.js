import { MOVIES_API_URL, MOVIES_API_ENDPOINT, ERROR_TEXT } from './config';

class MoviesApi {
  constructor(baseUrl, endpoint) {
    // Initialize object.
    this.url = baseUrl + endpoint;
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  _processResponse(response) {
    // Return JSON response if status is ok or generate error.
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`${ERROR_TEXT}: ${response.status}`));
  }

  getMovies() {
    // Get all movies data.
    return fetch(this.url, {
      headers: this.headers,
    }).then(this._processResponse);
  }
}

const moviesApi = new MoviesApi(MOVIES_API_URL, MOVIES_API_ENDPOINT);
export default moviesApi;
