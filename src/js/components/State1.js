import React from 'react';

import Tab from './state1/Tab';
import Content from './state1/Content';

export default class State1 extends React.Component {
  render() {
    return (
      <div class="state state-1">
        <Tab />
        <Content />
      </div>
    );
  }
}
