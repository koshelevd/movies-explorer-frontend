import useDocumentTitle from '../../hooks/useDocumentTitle';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { initial_cards } from '../../utils/constants';

import './Movies.css';

function Movies() {
  useDocumentTitle('Фильмы - Movie explor');
  return (
    <main className="content movies">
      <SearchForm />
      <MoviesCardList cards={initial_cards} />
      <Preloader />
      <button className="movies__button smoothly">Ещё</button>
    </main>
  );
}

export default Movies;
