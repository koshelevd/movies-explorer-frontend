import { useRef } from 'react';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {
  const aboutMeRef = useRef();
  const aboutProjectRef = useRef();
  const techsRef = useRef();

  const scrollToTarget = (ref) => {
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }, 500);
  };

  return (
    <main className="content">
      <Promo
        scroller={scrollToTarget}
        refs={{ aboutProjectRef, techsRef, aboutMeRef }}
      />
      <AboutProject targetRef={aboutProjectRef} />
      <Techs targetRef={techsRef} />
      <AboutMe targetRef={aboutMeRef} />
      <Portfolio />
    </main>
  );
}

export default Main;
