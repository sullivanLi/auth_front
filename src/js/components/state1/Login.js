import React from 'react';
import { CheckInputData } from '../../utils';
import Server from '../../server';

export default class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <h1>Welcome Back!</h1>
        <div class="alert"></div>
        <input type="text" class="name" placeholder="Username"/>
        <input type="password" class="password" placeholder="Password"/>
        <button type="submit" class="button btn-loader">Log In</button>
      </div>
    );
  }

  componentDidMount() {
    let $app = $('#app');
    let $login = $('#login');
    let $alert = $login.find('.alert');
    let $button = $login.find('button');
    $('#login .button').on('click', function (e) {
      if (processing) return;
      // check input data
      let msg = CheckInputData($login);
      $alert.removeClass('is-open');
      if (msg !== "") {
        $alert.text(msg);
        $alert.addClass('is-open');
        processing = false;
        return;
      }
      // start processing
      processing = true;
      $button.addClass("processing");
      Server.login($login.find('.name').val(), $login.find('.password').val(), () => {
        $app.addClass("is-transitioned");
        $button.removeClass("processing");
        processing = false;
      }, (error) => {
        console.log(error);
        $alert.text(error.responseText);
        $alert.addClass('is-open');
        $button.addClass("finished");
        setTimeout(() => {
          $button.removeClass("processing");
          $button.removeClass("finished");
          processing = false;
        }, 600)
      });
    });
  }
}
