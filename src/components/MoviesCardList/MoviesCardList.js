import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';
import {
  MORE_BUTTON_TEXT,
  SEARCH_RESULT_ERROR,
  NOT_FOUND_TEXT,
} from '../../utils/config';

function MoviesCardList({
  cards,
  cardsToShow,
  onMore,
  userMovies,
  isSavedMovies,
  isError,
  isSearch,
}) {
  const cardsNumber = cards.length;
  console.log(cards);
  return (
    <section className="card-list">
      {isError ? (
        <p className="card-list__message">{SEARCH_RESULT_ERROR}</p>
      ) : isSearch && cardsNumber === 0 ? (
        <p className="card-list__message">{NOT_FOUND_TEXT}</p>
      ) : (
        <>
          <ul className="card-list__cards">
            {cards.slice(0, cardsToShow).map((card) => (
              <MoviesCard
                key={card.movie.movieId}
                movie={card.movie}
                userMovies={userMovies}
                onClick={card.onClick}
                isSavedMovies={isSavedMovies}
              />
            ))}
          </ul>
          <button
            className={`card-list__button ${
              cardsToShow < cardsNumber ? 'card-list__button_active' : ''
            } smoothly`}
            onClick={onMore}
          >
            {MORE_BUTTON_TEXT}
          </button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
