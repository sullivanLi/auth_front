import React from 'react';
let CheckInputData = require('../../utils.js').CheckInputData;

export default class Signup extends React.Component {
  render() {
    return (
      <div id="signup">
        <h1>Sign Up for Free</h1>
        <div class="alert"></div>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button type="submit" class="button btn-loader">Sign Up</button>
      </div>
    );
  }

  componentDidMount() {
    let $login = $('#signup');
    let $alert = $login.find('.alert');
    let $button = $login.find('button');
    $button.on('click', function (e) {
      if (processing) return;
      let msg = CheckInputData($login);
      $alert.removeClass('is-open');
      if (msg !== "") {
        $alert.text(msg);
        $alert.addClass('is-open');
        processing = false;
        return;
      }
      $button.addClass("processing");
    });
  }
}
