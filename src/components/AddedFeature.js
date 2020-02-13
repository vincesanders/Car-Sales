import React from 'react';

import { useDispatch } from 'react-redux';
import { removeFeature } from '../actions/actions';

const AddedFeature = props => {
  const removeItem = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeItem(removeFeature(props.feature))} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
