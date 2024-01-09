import React, { useEffect, useState } from 'react';
import './Application.scss';
import Test from '@components/Test';

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme == 1) {
      setDarkTheme(true);
    } else if (useDarkTheme == 0) {
      setDarkTheme(false);
    }
  }, []);

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  // const toggleTheme = () => setDarkTheme(!darkTheme);

  return (
    <div id='erwt'>
      <div className='header'>
        <div className='main-heading'>
          <h1 className='themed'>Pomodoro</h1>
        </div>
<Test/>
      </div>
    </div>
  );
};

export default Application;
