const { useState, useEffect } = require('react');

const useDebounce = (value, ms = 2e3) => {
  const [debouncedSearch, setDebouncedSearch] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedSearch(value);
    }, ms);
    return () => clearTimeout(id);
  }, [value]);
  return debouncedSearch;
};

export default useDebounce;
