import { useEffect, useState } from 'react';

export const useStateWithLocalStorage = (localStorageKey) => {
  const localStorageValue = localStorage.getItem(localStorageKey);
  let extractedValue = false;
  if (localStorageValue) {
    extractedValue = localStorageValue !== 'false';
  }
  const [value, setValue] = useState(extractedValue);

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value === 'true' || value, setValue];
};
