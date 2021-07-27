import photo from '../../images/student-photo.jpg';
import './AboutMe.css';

function AboutMe({ targetRef }) {
  return (
    <section className="section about-me" id="about-me" ref={targetRef}>
      <h2 className="section__header">Студент</h2>
      <article className="about-me__info">
        <img src={photo} alt="Фото студента" className="about-me__photo" />
        <div className="about-me__article-container">
          <div className="about-me__text">
            <h3 className="about-me__header">Виталий</h3>
            <p className="about-me__subheader">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__content">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <p className="about-me__links">
            <a
              href="https://facebook.com"
              className="link about-me__link smoothly"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com"
              className="link about-me__link smoothly"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
