import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) return initialValue;

    try {
     
      const parsed = JSON.parse(storedValue);

     
      if (typeof parsed === typeof initialValue) {
        return parsed;
      }

      return storedValue; 
    } catch {
      return storedValue;
    }
  });

  useEffect(() => {

    const valueToStore = typeof value === "string"
      ? value
      : JSON.stringify(value);

    localStorage.setItem(key, valueToStore);
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;