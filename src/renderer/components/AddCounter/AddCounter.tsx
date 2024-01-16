import React from 'react';
import { useAtomValue } from 'jotai';

import { addCounterAtom } from '@renderer/storage/atoms';

import './AddCounter.scss';

const AddCounter = () => {
  const addCounterAtomValue = useAtomValue(addCounterAtom);

  return addCounterAtomValue
    && <div className="addCounterWrapper">
      <input type="text" placeholder="clock name" />
      <span className="btn">OK</span>
    </div>;
};

export default AddCounter;