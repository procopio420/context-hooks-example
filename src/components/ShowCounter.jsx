import React from 'react';
import { useCounter } from '../hooks/counter';

export default function ShowCounter() {
  const { count } = useCounter();
  return <p>{count}</p>;
}
