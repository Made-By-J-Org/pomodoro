import React from 'react';
import { useAtomValue } from 'jotai';

import { addCounterAtom } from '@renderer/storage/atoms';

const AddCounter = () => {
  const addCounterAtomValue = useAtomValue(addCounterAtom)

  return addCounterAtomValue
      ? <input type="text" />
      : null
}

export default AddCounter