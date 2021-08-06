import {
  DECLENSION_CASES,
  HOURS_DECLENSIONS,
  MINUTES_DECLENSIONS,
  MINUTES_IN_HOUR,
  ONE_HUNDRED,
  FOUR,
  LAST_CASE,
  TEN,
  TWENTY,
  THIRD_DECLENSION,
} from './config';

export function minutesToStr(value) {
  function numberDeclension(number, units) {
    const cases = DECLENSION_CASES;
    return units[
      number % ONE_HUNDRED > FOUR && number % ONE_HUNDRED < TWENTY
        ? THIRD_DECLENSION
        : cases[number % TEN < LAST_CASE ? number % TEN : LAST_CASE]
    ];
  }
  const hoursDeclensions = HOURS_DECLENSIONS;
  const minutesDeclensions = MINUTES_DECLENSIONS;
  const hours = ~~(value / MINUTES_IN_HOUR);
  const minutes = value % MINUTES_IN_HOUR;
  const hoursUnit = numberDeclension(hours, hoursDeclensions);
  const minutesUnit = numberDeclension(minutes, minutesDeclensions);
  const hoursString = hours ? `${hours} ${hoursUnit} ` : '';
  const minutesString = minutes ? `${minutes} ${minutesUnit}` : '';
  return hoursString + minutesString;
}
