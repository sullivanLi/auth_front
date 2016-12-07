import React from 'react';

export default class Tab extends React.Component {
  render() {
    return (
      <ul class="tab-group">
        <li class="tab active"><a href="#signup">Sign Up</a></li>
        <li class="tab"><a href="#login">Log In</a></li>
      </ul>
    );
  }

  componentDidMount() {
    $('.tab a').on('click', function (e) {
      if (processing) return;
      e.preventDefault();
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');

      let target = $(this).attr('href');
      $('.tab-content > div').not(target).hide();
      $(target).fadeIn(600);
    });
  }
}
