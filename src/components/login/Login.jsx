import React from "react";
import imageLogIn from "../../assests/imgLogIn.png";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
      },
      errors: "",
    };
  }
  // onClickLogin() {
  //   let { username, password } = this.state.user;
  //   if (username === "admin" && password === "admin") {
  //   } else {
  //     alert("credentiale gresite");
  //   }
  // }

  onChangeHandler(event) {
    if (
      (!event.currentTarget.value || event.currentTarget.value === "") &&
      (event.currentTarget.id === "username" ||
        event.currentTarget.id === "password")
    ) {
      this.setState({
        errors: {
          ...this.state.errors,
          [event.currentTarget.id]: "**Acest camp este obligatoriu",
        },
      });
    } else {
      let newErrors = this.state.errors;
      delete newErrors[event.currentTarget.id];
      this.setState({
        errors: newErrors,
      });
    }

    this.setState({
      user: {
        ...this.state.user,
        [event.currentTarget.id]: event.currentTarget.value,
      },
    });
  }
  render() {
    return (
      <div className="container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="imageLogIn">
            <img src={imageLogIn} alt="logIn" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={(event) => this.onChangeHandler(event)}
                type="text"
                name="username"
                id="username"
                placeholder="username"
              ></input>
              {this.state.errors.username && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  {this.state.errors.username}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={(event) => this.onChangeHandler(event)}
                id="password"
                type="password"
                name="password"
                placeholder="password"
              ></input>
              {this.state.errors.password && (
                <span
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {this.state.errors.password}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/">
            <button className="btn" type="button">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
