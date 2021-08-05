import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import {
  ACTIVE_ERROR_SELECTOR,
  SEARCH_ERROR_MESSAGE,
} from '../../utils/config';

function SearchForm({
  onSearch,
  searchInputRef,
  onFilterChange,
  isChecked,
  searchFormIsValid,
  isLoading,
}) {
  function searchMovies(e) {
    e.preventDefault();
    onSearch();
  }

  return (
    <form className="search-form" onSubmit={searchMovies}>
      <div className="search-form__container">
        <input
          type="search"
          className="search-form__input smoothly"
          placeholder="Фильм"
          name="search"
          autoComplete="off"
          autoFocus
          ref={searchInputRef}
          disabled={isLoading}
        />
        <input
          type="submit"
          className="search-form__submit smoothly"
          value=""
          disabled={isLoading}
        />
      </div>
      <span
        className={`search-form__validation-error form__validation-error ${
          searchFormIsValid ? '' : ACTIVE_ERROR_SELECTOR
        }`}
      >
        {SEARCH_ERROR_MESSAGE}
      </span>
      <FilterCheckbox
        label="Короткометражки"
        checked={isChecked}
        onChange={onFilterChange}
      />
    </form>
  );
}

export default SearchForm;
