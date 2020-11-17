import React from 'react';
import { Link } from 'react-router-dom';
import Screen from '../../Components/Screen'
import logo from '../../img/logo.svg'
import './style.css'

const SelectPage = () => {
  return (
    <Screen>
      <div className="SelectPage_menu">
        <img src={logo} />
        <div>
          <button><Link className="button" to="/stopwatch">Stopwatch</Link></button>
          <button><Link to="/countdown">CountDown</Link></button>
        </div>
      </div>
    </Screen>
  );
};

export default SelectPage;
