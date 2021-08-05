export function minutesToStr(value) {
  function numberDeclension(number, units) {
    const cases = [2, 0, 1, 1, 1, 2];
    return units[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }
  const hoursDeclensions = ['час', 'часа', 'часов'];
  const minutesDeclensions = ['минута', 'минуты', 'минут'];
  const hours = ~~(value / 60);
  const minutes = value % 60;
  const hoursUnit = numberDeclension(hours, hoursDeclensions);
  const minutesUnit = numberDeclension(minutes, minutesDeclensions);
  const hoursString = hours ? `${hours} ${hoursUnit} ` : '';
  const minutesString = minutes ? `${minutes} ${minutesUnit}` : '';
  return hoursString + minutesString;
}
