import React from 'react';
import { Link } from 'react-router-dom';
import Screen from '../../Components/Screen'
import logo from '../../img/logo.svg'
import TitleTime from "../../Components/TitleTime"

import './style.css'

const SelectPage = () => {
  return (
    <Screen>
      <TitleTime count={null} />

      <div className="SelectPage_menu">
        <img src={logo} />
        <div>
          <Link className="button" to="/stopwatch">Stopwatch</Link>
          <Link className="button" to="/countdown">CountDown</Link>
        </div>
      </div>
    </Screen>
  );
};

export default SelectPage;
