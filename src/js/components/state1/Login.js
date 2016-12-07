import React from 'react';
let CheckInputData = require('../../utils.js').CheckInputData;

export default class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <h1>Welcome Back!</h1>
        <div class="alert"></div>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button type="submit" class="button btn-loader">Log In</button>
      </div>
    );
  }

  componentDidMount() {
    let $app = $('#app');
    let $login = $('#login');
    let $alert = $login.find('.alert');
    $('#login .button').on('click', function (e) {
      if (processing) return;
      let msg = CheckInputData($login);
      $alert.removeClass('is-open');
      if (msg !== "") {
        $alert.text(msg);
        $alert.addClass('is-open');
        processing = false;
        return;
      }
      $app.addClass("is-transitioned");
    });
  }
}
