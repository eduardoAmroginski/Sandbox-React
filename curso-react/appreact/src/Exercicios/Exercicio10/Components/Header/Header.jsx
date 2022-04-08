import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Button from '../../Components/Button/Button';

import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const [pathName, setPathName] = useState('/');

  console.log(location);
  React.useEffect(() => {
    console.log('Mudou a rota para: ' + location.pathname);

    setPathName(location.pathname);
  }, [location]);

  return (
    <nav className={styles.container}>
      <NavLink to='/' end><Button title='Produto' active={pathName === '/'} /></NavLink>
      <NavLink to='contato'><Button title='Contato' active={pathName === '/contato'} /></NavLink>
    </nav>
  );
};

export default Header;
