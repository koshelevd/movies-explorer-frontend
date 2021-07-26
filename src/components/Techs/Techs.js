import './Techs.css';

function Techs({ targetRef }) {
  return (
    <section className="techs section" id="techs" ref={targetRef}>
      <h2 className="section__header">Технологии</h2>
      <h3 className="techs__header">7 технологий</h3>
      <p className="techs__subheader">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__features">
        <li className="techs__feature">HTML</li>
        <li className="techs__feature">CSS</li>
        <li className="techs__feature">JS</li>
        <li className="techs__feature">React</li>
        <li className="techs__feature">Git</li>
        <li className="techs__feature">Express.js</li>
        <li className="techs__feature">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
