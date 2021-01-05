//Props

import React from 'react';
import Modal from './Modal';
import ButtonModal from './ButtonModal';

const UseStateExemple3 = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default UseStateExemple3;
