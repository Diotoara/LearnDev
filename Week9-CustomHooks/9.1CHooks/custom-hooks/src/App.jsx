import { useIsOnline } from './hooks/isOnline'
import { useMouse } from './hooks/usePointer'
import { useTimer } from './hooks/timer'
import React, { useState } from 'react';
import {useDebounce} from './hooks/debounce';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 1000); // 500 milliseconds debounce delay
  {console.log("re-render")}
  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
      />
    <h4>{debouncedValue}</h4>
      </>
  );
};

export default App;