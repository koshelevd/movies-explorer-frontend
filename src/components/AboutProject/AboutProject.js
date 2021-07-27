import './AboutProject.css';

function AboutProject({ targetRef }) {
  return (
    <section
      className="about-project section"
      id="about-project"
      ref={targetRef}
    >
      <h2 className="section__header">О проекте</h2>
      <div className="about-project__articles-container">
        <article className="about-project__article">
          <h3 className="about-project__article-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__article-content">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__article">
          <h3 className="about-project__article-header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__article-content">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-project__charts-container">
        <div className="about-project__chart about-project__chart_backend">
          <div className="about-project__progressbar about-project__progressbar_backend">
            1 неделя
          </div>
          <p className="about-project__chart-caption">Back-end</p>
        </div>
        <div className="about-project__chart">
          <div className="about-project__progressbar about-project__progressbar_frontend">
            4 недели
          </div>
          <p className="about-project__chart-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
