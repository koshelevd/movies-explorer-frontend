import { useCallback } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useSearchEngine } from '../../hooks/useSearchEngine';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {
  SAVED_MOVIES_PAGE_TITLE,
} from '../../utils/config';

import './SavedMovies.css';

function SavedMovies({
  userMovies,
  cardsToShow,
  onMore,
  onSave,
  isError,
  isLoading,
}) {
  const movieMapper = useCallback(
    (movie) => {
      return {
        movie,
        onClick: onSave,
      };
    },
    [onSave]
  );

  const {
    filteredCards,
    handleSearch,
    handleFilterChange,
    searchInputRef,
    isShortFilm,
    searchFormIsValid,
    isSearch,
  } = useSearchEngine(userMovies, movieMapper, onSave);

  useDocumentTitle(SAVED_MOVIES_PAGE_TITLE);

  return (
    <main className="content saved-movies">
      <SearchForm
        onSearch={handleSearch}
        searchInputRef={searchInputRef}
        onFilterChange={handleFilterChange}
        isChecked={isShortFilm}
        searchFormIsValid={searchFormIsValid}
        isLoading={isLoading}
      />
      <MoviesCardList
        cards={filteredCards}
        cardsToShow={cardsToShow}
        onMore={onMore}
        userMovies={userMovies}
        isSavedMovies={true}
        isError={isError}
        isSearch={isSearch}
      />
    </main>
  );
}

export default SavedMovies;
