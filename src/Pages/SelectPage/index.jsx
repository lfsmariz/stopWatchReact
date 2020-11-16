import React from 'react';
import { Link } from 'react-router-dom';
import SampleComponent from '../../Components/SampleComponent';

const SelectPage = () => {
  return (
    <>
      <Link to="/stopwatch">Stopwatch</Link>
      <Link to="/countdown">CountDown</Link>
      <SampleComponent />
    </>
  );
};

export default SelectPage;
