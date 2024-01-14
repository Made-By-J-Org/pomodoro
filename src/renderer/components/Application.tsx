import React, { useEffect } from 'react';
import './Application.scss';
import Counter from '@components/Counter/Counter';
import AddCounter from '@components/AddCounter/AddCounter';

const Application: React.FC = () => {
  useEffect(() => {
    console.log('App did mount');
  }, []);

  return (
    <main>
      <Counter/>
      <Counter/>
      <Counter/>
      <AddCounter/>
    </main>
  );
};

export default Application;
