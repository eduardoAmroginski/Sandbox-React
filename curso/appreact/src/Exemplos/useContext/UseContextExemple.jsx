import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalStorage';

const UseContextExemple = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default UseContextExemple;
