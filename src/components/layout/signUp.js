//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React, { Component } from "react";

// ────────────────────────────────────────────────────────────────────────────────

class signIn extends Component {
  state = {
    SID: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
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
                <strong> Register </strong>
              </h3>
            </div>
            <div className="form-group">
              <label> Student ID </label>
              <input
                type="int"
                id="SID"
                className="form-control"
                onChange={this.handleChange}
                placeholder="Student ID"
              />
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label> Name </label>
                  <input
                    type="name"
                    id="name"
                    className="form-control"
                    onChange={this.handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label> Surname </label>
                  <input
                    type="name"
                    id="lname"
                    className="form-control"
                    onChange={this.handleChange}
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <label> Email </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    onChange={this.handleChange}
                    placeholder="Email"
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
                <div className="form-group">
                  <label> Repeat Password </label>
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
