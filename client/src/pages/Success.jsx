import React from 'react';
import { useLocation } from 'react-router';

const Success = (props) => {
  console.log(props);
  const location = useLocation();
  console.log(location.state.data.payment);
  return <div>Succesfull </div>;
};

export default Success;
