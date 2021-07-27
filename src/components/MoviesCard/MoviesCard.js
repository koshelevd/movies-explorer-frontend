import './MoviesCard.css';

function MoviesCard({ title, duration, poster, buttonType, buttonName }) {
  const buttonClasses = {
    save: 'button_type_save',
    saved: 'button_type_saved',
    delete: 'button_type_delete',
  };
  const saveButtonClassName = `card__button ${buttonClasses[buttonType]} smoothly`;

  return (
    <li className="card">
      <figure className="card__figure">
        <figcaption className="card__caption">
          <h2 className="card__title">{title}</h2>
          <p className="card__duration">{duration}</p>
        </figcaption>
        <img src={poster} alt={title} className="card__poster" />
        <button className={saveButtonClassName}>{buttonName}</button>
      </figure>
    </li>
  );
}

export default MoviesCard;
