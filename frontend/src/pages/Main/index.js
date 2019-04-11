import React, { Component } from 'react';

import './styles.css';
import logo from "../../assets/logo.svg"

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
        <div id="main-container">
        <form action="">
        <img  src={logo} alt="" />
        <input placeholder="Criar um box"></input>
        <button type="submit">Criar</button>
        </form>
        </div>
    );
  }
}
