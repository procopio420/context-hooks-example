import React from 'react';
import { useState } from '@hookstate/core';
import { globalCounterState } from '../hooks/counter';

export default function IncreaseCounter() {
  const counter = useState(globalCounterState);
  return <button onClick={() => counter.set((currentCounter) => ({counter: currentCounter.counter + 1}))}>+</button>;
}
