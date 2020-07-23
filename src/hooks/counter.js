import React, { createContext, useContext, useState } from 'react';

export const CounterContext = createContext();

export default function CounterProvider({children}) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{count, setCount}}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () =>{
  const context = useContext(CounterContext);
  return context;
}