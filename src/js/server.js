module.exports = {
  root: 'http://localhost:3000/api',
  signup(name, pass, done, error) {
    $.ajax({
      url: this.root + '/users/create',
      method: 'POST',
      data: {
        name: name,
        password: pass
      }
    }).then((res) => {
      if (done) done(res);
    }).catch((err) => {
      if (error) error(err);
    });
  },
  login(name, pass, done, error) {
    $.ajax({
      url: this.root + '/users/login',
      method: 'POST',
      data: {
        name: name,
        password: pass
      }
    }).then((res) => {
      localStorage.token = res.token;
      if (done) done(res);
    }).catch((err) => {
      if (error) error(err);
    });
  },
  logout() {
    $.ajax({
      url: this.root + '/users/logout',
      method: 'POST',
      headers: {
        Authorization: "Token token=" + localStorage.token
      }
    });
    delete localStorage.token;
  },
  greetings(done, error) {
    $.ajax({
      url: this.root + '/greetings',
      method: 'GET',
      headers: {
        Authorization: "Token token=" + localStorage.token
      }
    }).then((res) => {
      if (done) done(res);
    }).catch((err) => {
      if (error) error(err);
    });
  },
  getToken() {
    return localStorage.token;
  },
  loggedIn() {
    return !!localStorage.token;
  }
}
