import React, { useEffect } from 'react';
import './Application.scss';
import Counter from '@components/Counter/Counter';
import Controls from '@components/Controls/Controls';

const Application: React.FC = () => {
  useEffect(() => {
    console.log('App did mount');
  }, []);

  return (
    <main>
      <Counter/>
      <Counter/>
      <Counter/>
      <Controls/>
    </main>
  );
};

export default Application;
