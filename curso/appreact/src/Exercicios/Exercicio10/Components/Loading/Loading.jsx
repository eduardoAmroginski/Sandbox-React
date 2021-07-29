import React from 'react';

import Spinner from './spinner.svg';

const Loading = () => {
  return (
    <div>
      <img src={Spinner} alt='loading' />
    </div>
  );
};

export default Loading;
