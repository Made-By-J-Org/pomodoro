import React from 'react';

import { addCounterAtom } from '@renderer/storage/atoms';

import './Controls.scss';
import { useAtom } from 'jotai';

const Controls = () => {
  const [addCounterAtomValue, setAddCounterAtomValue] = useAtom(addCounterAtom);
  return (
    <div className="wrapper">
      <button
        type="button"
        onClick={() => setAddCounterAtomValue(!addCounterAtomValue)}
      >
        {addCounterAtomValue ? <>&#x2212;</> : <>&#x2b;</>}
      </button>
      <button type="button" disabled>&#x2699;</button>
      <button type="button" disabled>&#x21d3;</button>
    </div>
  );
};

export default Controls;