import React from 'react';

import Signup from './Signup';
import Login from './Login';

export default class Content extends React.Component {
  render() {
    return (
      <div class="tab-content">
        <Signup />
        <Login />
      </div>
    );
  }
}
