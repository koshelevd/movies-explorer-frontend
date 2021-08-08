import { useState, useEffect, useRef } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import useWindowType from '../../hooks/useWindowType';
import { useStateWithLocalStorage } from '../../hooks/useStateWithLocalStorage';

import {
  ERROR_MESSAGE_TIMEOUT,
  SIGN_UP_ERROR_DEFAULT_MESSAGE,
  SIGN_IN_ERROR_DEFAULT_MESSAGE,
  ERROR_TEXT,
  PROFILE_SAVE_SUCCESS_MESSAGE,
  KEY_LOGGED_IN,
  KEY_BEATFILMS_MOVIES,
  KEY_USER_MOVIES,
  KEY_FILTERED_MOVIES,
} from '../../utils/config';

import {
  signUpErrorMessage,
  signInErrorMessage,
  signOutErrorMessage,
  userUpdateErrorMessage,
} from '../../utils/ErrorMessages';

function App() {
  const history = useHistory();
  const { defaultCardsToShow, moreCards } = useWindowType();
  const [currentUser, setCurrentUser] = useState({});
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfileEdit, setIsProfileEdit] = useState(false);
  const [loggedIn, setLoggedIn] = useStateWithLocalStorage(KEY_LOGGED_IN);
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userMovies, setUserMovies] = useState([]);
  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [savedLocalMovies, setSavedLocalMovies] = useState([]);
  const [status, _setStatus] = useState('');
  const [cardsToShow, _setCardsToShow] = useState(defaultCardsToShow);
  const [isError, setIsError] = useState(false);
  const cardsToShowRef = useRef(cardsToShow);

  const setCardsToShow = (value) => {
    cardsToShowRef.current = value;
    _setCardsToShow(value);
  };

  const setStatus = (value) => {
    _setStatus(value);
    setTimeout(() => _setStatus(''), ERROR_MESSAGE_TIMEOUT);
  };

  const location = useLocation();

  useEffect(() => {
    setAuthError('');
    setIsError(false);
  }, [location]);

  useEffect(() => {
    setCardsToShow(defaultCardsToShow);
  }, [defaultCardsToShow]);

  useEffect(() => {
    const moviesLocal = JSON.parse(localStorage.getItem(KEY_BEATFILMS_MOVIES));
    if (moviesLocal) {
      setSavedLocalMovies(moviesLocal);
    }
  }, []);

  useEffect(() => {
    const userMoviesLocal = JSON.parse(localStorage.getItem(KEY_USER_MOVIES));
    if (userMoviesLocal) {
      setUserMovies(userMoviesLocal);
    }
    if (loggedIn && !userMoviesLocal) {
      mainApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem(KEY_USER_MOVIES, JSON.stringify(movies));
          setUserMovies(movies);
        })
        .catch((err) => setStatus(loggedIn ? err.message : ''));
    }
  }, [currentUser]);

  useEffect(() => {
    if (Object.entries(currentUser).length === 0 && loggedIn) {
      mainApi
        .getProfileInfo()
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`${ERROR_TEXT}: ${response.status}`));
        })
        .then((result) => {
          setLoggedIn(true);
          setCurrentUser(result);
        })
        .catch((err) => {
          console.log(err);
          setLoggedIn(false);
        });
    }
  }, []);

  function handleClickMore() {
    setCardsToShow(cardsToShow + moreCards);
  }

  function handleCardsSearch() {
    setIsLoading(true);
    setCardsToShow(defaultCardsToShow);
    if (savedLocalMovies.length !== 0) {
      setBeatfilmMovies(savedLocalMovies);
      setIsLoading(false);
      setIsError(false);
    } else {
      moviesApi
        .getMovies()
        .then((movies) => {
          localStorage.setItem(KEY_BEATFILMS_MOVIES, JSON.stringify(movies));
          setBeatfilmMovies(movies);
        })
        .catch((err) => {
          setIsError(true);
          setStatus(err.message);
        })
        .finally(handleEndOfResponse);
    }
  }

  function handleSaveMovieClick(movie, isSaved) {
    mainApi
      .saveOrDeleteMovie(movie, isSaved)
      .then((newMovie) => {
        if (!isSaved) {
          localStorage.setItem(
            KEY_USER_MOVIES,
            JSON.stringify([...userMovies, newMovie])
          );
          setUserMovies((state) => [...state, newMovie]);
        } else {
          localStorage.setItem(
            KEY_USER_MOVIES,
            JSON.stringify(userMovies.filter((m) => m.movieId !== movie.movieId))
          );
          setUserMovies((state) =>
            state.filter((m) => m.movieId !== movie.movieId)
          );
        }
      })
      .catch((err) => {
        setStatus(err.message);
      });
  }

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  function handleIsProfileEdit() {
    setIsProfileEdit(true);
  }

  function handleEndOfResponse() {
    setIsLoading(false);
  }

  function handleRegister(data) {
    setIsLoading(true);
    mainApi
      .signup(data)
      .then((result) => {
        if (result) {
          handleLogin({ email: data.email, password: data.password });
        } else {
          Promise.reject(SIGN_UP_ERROR_DEFAULT_MESSAGE);
        }
      })
      .catch((err) => {
        setAuthError(signUpErrorMessage(err));
      })
      .finally(handleEndOfResponse);
  }

  function handleLogin(data) {
    setIsLoading(true);
    mainApi
      .signin(data)
      .then((result) => {
        if (result) {
          setLoggedIn(true);
          setCurrentUser(result);
          history.push('/movies');
        } else {
          Promise.reject(SIGN_IN_ERROR_DEFAULT_MESSAGE);
        }
      })
      .catch((err) => {
        setAuthError(signInErrorMessage(err));
      })
      .finally(handleEndOfResponse);
  }

  const handleLogout = () => {
    setIsLoading(true);
    mainApi
      .signout()
      .then((result) => {
        if (result) {
          setLoggedIn(false);
          localStorage.removeItem(KEY_BEATFILMS_MOVIES);
          localStorage.removeItem(KEY_USER_MOVIES);
          localStorage.removeItem(KEY_FILTERED_MOVIES);
        }
      })
      .catch((err) => {
        setAuthError(signOutErrorMessage(err));
      })
      .finally(handleEndOfResponse);
  };

  function handleUpdateUser(data) {
    setIsLoading(true);
    mainApi
      .editProfileInfo({ name: data.name, email: data.email })
      .then((result) => {
        setCurrentUser(result);
        setIsProfileEdit(false);
        setStatus(PROFILE_SAVE_SUCCESS_MESSAGE);
      })
      .catch((err) => {
        setAuthError(userUpdateErrorMessage(err));
      })
      .finally(handleEndOfResponse);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Layout
        loggedIn={loggedIn}
        isMenuOpen={isMenuOpen}
        errorStatus={status}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      >
        <Switch>
          <Route exact path="/" component={Main} />
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            beatfilmMovies={beatfilmMovies}
            userMovies={userMovies}
            cardsToShow={cardsToShowRef.current}
            onSearch={handleCardsSearch}
            onSave={handleSaveMovieClick}
            onMore={handleClickMore}
            isLoading={isLoading}
            isError={isError}
            component={Movies}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            userMovies={userMovies}
            cardsToShow={cardsToShowRef.current}
            onSave={handleSaveMovieClick}
            onMore={handleClickMore}
            isLoading={isLoading}
            isError={isError}
            component={SavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onEdit={handleIsProfileEdit}
            onSubmit={handleUpdateUser}
            onLogout={handleLogout}
            errorMessage={authError}
            isEdit={isProfileEdit}
            isLoading={isLoading}
          />
          <Route path="/signup">
            <Register
              onSubmit={handleRegister}
              errorMessage={authError}
              isLoading={isLoading}
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="/signin">
            <Login
              onSubmit={handleLogin}
              errorMessage={authError}
              isLoading={isLoading}
              loggedIn={loggedIn}
            />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </CurrentUserContext.Provider>
  );
}

export default App;
