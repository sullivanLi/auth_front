import React from 'react';

export default class State2 extends React.Component {
  render() {
    return (
      <div class="state state-2">
        <h1>Hello, Stranger</h1>
        <button class="button button-block">Log Out</button>
      </div>
    );
  }

  componentDidMount() {
    $('.state-2 .button').on('click', function (e) {
      $('#app').removeClass("is-transitioned");
    });
  }
}
