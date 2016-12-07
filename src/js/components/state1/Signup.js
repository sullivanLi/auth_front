import React from 'react';
import { CheckInputData } from '../../utils';
import Server from '../../server';

export default class Signup extends React.Component {
  render() {
    return (
      <div id="signup">
        <h1>Sign Up for Free</h1>
        <div class="alert"></div>
        <input type="text" class="name" placeholder="Username"/>
        <input type="password" class="password" placeholder="Password"/>
        <button type="submit" class="button btn-loader">Sign Up</button>
      </div>
    );
  }

  componentDidMount() {
    let _component = this;
    let $signup = $('#signup');
    let $alert = $signup.find('.alert');
    let $button = $signup.find('button');
    $button.on('click', function (e) {
      if (processing) return;
      // check input data
      let msg = CheckInputData($signup);
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
      Server.signup($signup.find('.name').val(), $signup.find('.password').val(), (result) => {
        $alert.text(result.message);
        _component.showResult($alert, $button);
      }, (error) => {
        $alert.text(error.responseText);
        _component.showResult($alert, $button);
      });
    });
  }

  showResult($alert, $button) {
    $alert.addClass('is-open');
    $button.addClass("finished");
    setTimeout(() => {
      $button.removeClass("processing");
      $button.removeClass("finished");
      processing = false;
    }, 600)
  }
}
