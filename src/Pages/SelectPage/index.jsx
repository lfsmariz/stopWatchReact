import React from 'react';
import { Link } from 'react-router-dom';

const SelectPage = () => {
  return (
    <>
      <Link to="/stopwatch">Stopwatch</Link>
      <Link to="/countdown">CountDown</Link>
    </>
  );
};

export default SelectPage;
