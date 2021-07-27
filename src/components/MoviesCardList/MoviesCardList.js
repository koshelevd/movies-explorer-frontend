import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';

function MoviesCardList({ cards }) {
  return (
    <section className="card-list">
      <ul className="card-list__cards">
        {cards.map((card) => (
          <MoviesCard
            key={card._id}
            title={card.title}
            duration={card.duration}
            poster={card.poster}
            buttonType={card.buttonType}
            buttonName={card.buttonName}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
