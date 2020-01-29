import React from 'react';

const computationScreen = (props) => (
  <div className="computation-screen" id="display">
    {props.children}
  </div>
);

export default computationScreen;
