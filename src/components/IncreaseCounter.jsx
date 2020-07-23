import React from 'react';
import { useCounter } from '../hooks/counter';

export default function IncreaseCounter() {
  const { setCount } = useCounter();
  return <button onClick={() => setCount((currentCount) => currentCount + 1)}>+</button>;
}
