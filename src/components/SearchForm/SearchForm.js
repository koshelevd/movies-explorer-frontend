import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <input
          type="text"
          className="search-form__input smoothly"
          placeholder="Фильм"
        />
        <input
          type="submit"
          className="search-form__submit smoothly"
          value=""
        />
      </div>
      <FilterCheckbox label="Короткометражки" checked={true} />
    </form>
  );
}

export default SearchForm;
