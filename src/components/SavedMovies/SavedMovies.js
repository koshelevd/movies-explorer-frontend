import useDocumentTitle from '../../hooks/useDocumentTitle';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

import { saved_cards } from '../../utils/constants';

function SavedMovies() {
  useDocumentTitle('Сохранённые фильмы - Movie explor');
  return (
    <main className="content saved-movies">
      <SearchForm />
      <MoviesCardList cards={saved_cards} />
    </main>
  );
}

export default SavedMovies;
