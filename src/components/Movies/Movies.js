import { useCallback } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { useSearchEngine } from '../../hooks/useSearchEngine';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import {
  MOVIES_PAGE_TITLE,
  MOVIES_API_URL,
  DEFAULT_EMPTY_VALUE,
  KEY_FILTERED_MOVIES,
} from '../../utils/config';

import './Movies.css';

function Movies({
  beatfilmMovies,
  userMovies,
  cardsToShow,
  onSearch,
  onMore,
  onSave,
  isLoading,
  isError,
}) {
  const moviesMapper = useCallback(
    (card) => {
      return {
        movie: {
          movieId: card.id,
          nameRU: card.nameRU,
          nameEN: card.nameEN,
          duration: card.duration,
          image: MOVIES_API_URL + card.image.url,
          country: card.country || DEFAULT_EMPTY_VALUE,
          director: card.director || DEFAULT_EMPTY_VALUE,
          year: card.year || DEFAULT_EMPTY_VALUE,
          description: card.description || DEFAULT_EMPTY_VALUE,
          trailer: card.trailerLink,
          thumbnail: MOVIES_API_URL + card.image.formats.thumbnail.url,
        },
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
  } = useSearchEngine(beatfilmMovies, moviesMapper, onSave, KEY_FILTERED_MOVIES, onSearch);

  useDocumentTitle(MOVIES_PAGE_TITLE);
  return (
    <main className="content movies">
      <SearchForm
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        searchInputRef={searchInputRef}
        isChecked={isShortFilm}
        searchFormIsValid={searchFormIsValid}
        isLoading={isLoading}
      />
      {isLoading ? (
        <Preloader isLoading={isLoading} />
      ) : (
        <MoviesCardList
          cards={filteredCards}
          cardsToShow={cardsToShow}
          onMore={onMore}
          userMovies={userMovies}
          isError={isError}
          isSearch={isSearch}
        />
      )}
    </main>
  );
}

export default Movies;
