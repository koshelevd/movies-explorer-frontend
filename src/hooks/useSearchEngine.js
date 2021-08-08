import { createRef, useState, useCallback, useEffect } from 'react';
import { SHORT_FILM_DURATION } from '../utils/config';

export function useSearchEngine(movies, moviesMapper, storageKey, onSearch) {
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
    const cards = filteredData.map(moviesMapper);
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(cards));
    }

    setFilteredCards(cards);
  }, [moviesFilter, moviesMapper, movies, storageKey]);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem(storageKey));
    if (cards && cards.length !== 0) {
      setFilteredCards(cards);
      setIsSearch(true);
    } else {
      setSearchFormIsValid(true);
      filterCards();
    }

  }, [filterCards, storageKey]);

  function handleSearch() {
    if (searchInputRef.current.value === '') {
      return setSearchFormIsValid(false);
    }
    setSearchQuery(searchInputRef.current.value);
    if (onSearch) {
      onSearch();
    }
    filterCards();
    setIsSearch(true);
  }

  function handleFilterChange() {
    setIsShortFilm(!isShortFilm);
    setIsSearch(true);
    setSearchFormIsValid(true);
    filterCards();
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
