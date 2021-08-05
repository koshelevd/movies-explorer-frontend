import './MoviesCard.css';
import { minutesToStr } from '../../utils/utils';
import {
  BUTTON_TYPE_DELETE,
  BUTTON_TYPE_SAVED,
  BUTTON_TYPE_SAVE,
  SAVE_BUTTON_TEXT,
} from '../../utils/config';

function MoviesCard({ movie, userMovies, isSavedMovies, onClick }) {
  const isSaved = userMovies.some(
    (userMovie) => userMovie.movieId === movie.movieId
  );

  const saveButtonClassName = `card__button ${
    isSavedMovies
      ? BUTTON_TYPE_DELETE
      : isSaved
      ? BUTTON_TYPE_SAVED
      : BUTTON_TYPE_SAVE
  } smoothly`;

  const buttonName = isSaved || isSavedMovies ? '' : SAVE_BUTTON_TEXT;

  function handleClick() {
    let movieToHandle = movie;
    if (isSaved) {
      const savedMovie = userMovies.find(
        (userMovie) => userMovie.movieId === movie.movieId
      );
      movieToHandle = { ...movie, _id: savedMovie._id };
    }
    onClick(movieToHandle, isSaved);
  }

  return (
    <li className="card smoothly">
      <figure className="card__figure">
        <figcaption className="card__caption">
          <h2 className="card__title">{movie.nameRU}</h2>
          <p className="card__duration">{minutesToStr(movie.duration)}</p>
        </figcaption>
        <a
          href={movie.trailer}
          className="card__trailer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={movie.image} alt={movie.nameRU} className="card__poster" />
        </a>
        <button
          className={saveButtonClassName}
          aria-label={SAVE_BUTTON_TEXT}
          onClick={handleClick}
        >
          {buttonName}
        </button>
      </figure>
    </li>
  );
}

export default MoviesCard;
