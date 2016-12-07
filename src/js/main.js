require('../css/main.sass');
global.$ = require('jquery');
global.processing = false;

import React from 'react';
import ReactDOM from 'react-dom';

import State1 from './components/State1';
import State2 from './components/State2';
import Server from './server';

class Main extends React.Component {
  render() {
    return (
      <div class="belt">
        <State1 />
        <State2 />
      </div>
    );
  }

  componentDidMount() {
    $('.loader').css('display', 'none');
    $('.container').css('display', 'flex');
    if(Server.loggedIn()) {
      $('#app').addClass("is-transitioned");
    }
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);

