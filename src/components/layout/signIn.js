//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { Component } from 'react';

// ────────────────────────────────────────────────────────────────────────────────

class signIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="col-md-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <strong> Sign In </strong>
              </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label> Username or Email </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    onChange={this.handleChange}
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label> Password </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn btn-sm btn-default">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default signIn;