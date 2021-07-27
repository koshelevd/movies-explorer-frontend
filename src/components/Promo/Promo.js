import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo({ scroller, refs }) {
  return (
    <section className="promo">
      <h1 className="promo__header">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab scroller={scroller} refs={refs} />
    </section>
  );
}

export default Promo;
