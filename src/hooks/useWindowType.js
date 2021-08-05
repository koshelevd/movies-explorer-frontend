import { useState, useEffect } from 'react';
import {
  MOBILE_WIDTH,
  DESKTOP_WIDTH,
  CARDS_TO_SHOW_MOBILE,
  CARDS_TO_SHOW_TABLET,
  CARDS_TO_SHOW_DESKTOP,
  MORE_CARDS_MOBILE,
  MORE_CARDS_TABLET,
  MORE_CARDS_DESKTOP,
} from '../utils/config';

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function useWindowType() {
  const [defaultCardsToShow, setDefaultCardsToShow] = useState(0);
  const [moreCards, setMoreCards] = useState(0);

  function handleResize() {
    setTimeout(() => {
      const currentWidth = getWindowWidth();
      if (currentWidth <= MOBILE_WIDTH) {
        setDefaultCardsToShow(CARDS_TO_SHOW_MOBILE);
        setMoreCards(MORE_CARDS_MOBILE);
      } else if (currentWidth > MOBILE_WIDTH && currentWidth < DESKTOP_WIDTH) {
        setDefaultCardsToShow(CARDS_TO_SHOW_TABLET);
        setMoreCards(MORE_CARDS_TABLET);
      } else {
        setDefaultCardsToShow(CARDS_TO_SHOW_DESKTOP);
        setMoreCards(MORE_CARDS_DESKTOP);
      }
    }, 500);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { defaultCardsToShow, moreCards };
}
