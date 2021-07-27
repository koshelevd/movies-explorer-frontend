import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  function handleMenuState() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Layout
      loggedIn={loggedIn}
      isMenuOpen={isMenuOpen}
      menuHandler={handleMenuState}
    >
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/movies" component={Movies} />
        <Route path="/saved-movies" component={SavedMovies} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
