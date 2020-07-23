import React from 'react';
import { useState } from '@hookstate/core';
import { globalCounterState } from '../hooks/counter';

export default function ShowCounter() {
  const counter = useState(globalCounterState);
  return <p>{counter.get().counter}</p>;
}
