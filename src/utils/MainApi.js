import {
  MAIN_API_URL,
  SIGN_UP_ENDPOINT,
  SIGN_IN_ENDPOINT,
  SIGN_OUT_ENDPOINT,
  PROFILE_ENDPOINT,
  MOVIES_ENDPOINT,
  ERROR_TEXT,
} from '../utils/config';

class MainApi {
  constructor(options) {
    // Initialize object.
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    this.signUpUrl = options.baseUrl + options.signUpEndpoint;
    this.signInUrl = options.baseUrl + options.signInEndpoint;
    this.signOutUrl = options.baseUrl + options.signOutEndpoint;
    this.profileUrl = options.baseUrl + options.profileEndpoint;
    this.moviesUrl = options.baseUrl + options.moviesEndpoint;
  }

  _processResponse(response) {
    // Return JSON response if status is ok or generate error.
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`${ERROR_TEXT}: ${response.status}`));
  }

  _processAuthResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response.status);
  }

  signup(data) {
    // Register user.
    return fetch(`${this.signUpUrl}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(this._processAuthResponse);
  }

  signin(data) {
    // Log in user.
    return fetch(`${this.signInUrl}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
      credentials: 'include',
    }).then(this._processAuthResponse);
  }

  signout(data) {
    // Register user.
    return fetch(`${this.signOutUrl}`, {
      method: 'POST',
      headers: this.headers,
      credentials: 'include',
    }).then(this._processAuthResponse);
  }

  getProfileInfo() {
    // Get profile info.
    return fetch(this.profileUrl, {
      headers: this.headers,
      credentials: 'include',
    });
  }

  editProfileInfo(data) {
    // Patch user's name and email.
    return fetch(this.profileUrl, {
      method: 'PATCH',
      headers: this.headers,
      credentials: 'include',
      body: JSON.stringify(data),
    }).then(this._processAuthResponse);
  }

  getMovies() {
    // Get all saved movies by user.
    return fetch(this.moviesUrl, {
      headers: this.headers,
      credentials: 'include',
    }).then(this._processResponse);
  }

  saveOrDeleteMovie(movie, isSaved) {
    // Save the movie (or delete if already saved).
    const url = isSaved ? `${this.moviesUrl}/${movie._id}/` : this.moviesUrl;
    const body = isSaved ? null : JSON.stringify(movie);
    return fetch(url, {
      method: isSaved ? 'DELETE' : 'POST',
      headers: this.headers,
      credentials: 'include',
      body: body,
    }).then(this._processResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  signUpEndpoint: SIGN_UP_ENDPOINT,
  signInEndpoint: SIGN_IN_ENDPOINT,
  signOutEndpoint: SIGN_OUT_ENDPOINT,
  profileEndpoint: PROFILE_ENDPOINT,
  moviesEndpoint: MOVIES_ENDPOINT,
});
export default mainApi;
