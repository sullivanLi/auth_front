import React from 'react';
import Server from '../server';

export default class State2 extends React.Component {
  render() {
    return (
      <div class="state state-2">
        <div class="alert"></div>
        <button class="button" id="greet">Greet</button>
        <button class="button" id="logout">Log Out</button>
      </div>
    );
  }

  componentDidMount() {
    let $app = $('#app');
    let $state = $('.state-2');
    let $alert = $state.find('.alert');
    $('#logout').on('click', function (e) {
      Server.logout();
      $app.removeClass("is-transitioned");
    });
    $('#greet').on('click', function (e) {
      Server.greetings((result) => {
        $alert.text(result.message);
        $alert.addClass('is-open');
      }, (error) => {
        $alert.text(error.responseText);
        $alert.addClass('is-open');
      });
    });
  }
}
