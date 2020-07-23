import React from 'react';
import CounterProvider from './hooks/counter';

import ShowCounter from './components/ShowCounter';
import IncreaseCounter from './components/IncreaseCounter';

function App() {
  return (
    <CounterProvider>
      <ShowCounter />
      <IncreaseCounter />
    </CounterProvider>
  );
}

export default App;
