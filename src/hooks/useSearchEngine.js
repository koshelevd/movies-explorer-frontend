import { createRef, useState, useCallback, useEffect } from 'react';
import { SHORT_FILM_DURATION } from '../utils/config';

export function useSearchEngine(movies, moviesMapper, onSearch) {
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [searchFormIsValid, setSearchFormIsValid] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const searchInputRef = createRef();

  const moviesFilter = useCallback(
    (value) => {
      const searchString = searchQuery.toLowerCase();
      const nameRuMatches =
        value.nameRU && value.nameRU.toLowerCase().includes(searchString);
      const nameEnMatches =
        value.nameEN && value.nameEN.toLowerCase().includes(searchString);
      const nameMatches = nameRuMatches || nameEnMatches;
      const shortMatches = value.duration <= SHORT_FILM_DURATION;
      return isShortFilm ? nameMatches && shortMatches : nameMatches;
    },
    [isShortFilm, searchQuery]
  );

  const filterCards = useCallback(() => {
    const filteredData = movies.filter(moviesFilter);
    setFilteredCards(filteredData.map(moviesMapper));
  }, [moviesFilter, moviesMapper, movies]);

  useEffect(() => {
    setSearchFormIsValid(true);
    filterCards();
  }, [filterCards, movies, isShortFilm]);

  function handleSearch() {
    if (searchInputRef.current.value === '') {
      return setSearchFormIsValid(false);
    }
    setSearchQuery(searchInputRef.current.value);
    if (onSearch) {
      onSearch();
    } else {
      filterCards();
    }
    setIsSearch(true);
  }

  function handleFilterChange() {
    setIsShortFilm(!isShortFilm);
    setIsSearch(true);
  }

  return {
    filteredCards,
    handleSearch,
    handleFilterChange,
    searchInputRef,
    isShortFilm,
    searchFormIsValid,
    isSearch,
  };
}
