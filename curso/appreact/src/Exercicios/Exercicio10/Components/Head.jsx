import React, { useEffect } from 'react';

const Head = (props) => {
  useEffect(() => {
    document.title = 'Store | ' + props.title;
    document.querySelector('meta[name="description"]').setAttribute('content', props.description);
    console.log(props);
  }, [props]);

  return (
    <>
    </>
  );
};

export default Head;
