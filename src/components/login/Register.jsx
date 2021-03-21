import React from "react";
import { Link } from "react-router-dom";
import imageLogIn from "../../assests/imgLogIn.jpg";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: "",
        email: "",
      },
      errors: "",
    };
  }
  onClickRegister() {
    console.log("works");
  }

  onChangeHandler(event) {
    if (
      (!event.currentTarget.value || event.currentTarget.value === "") &&
      (event.currentTarget.id === "username" ||
        event.currentTarget.id === "password" ||
        event.currentTarget.id === "email")
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
        <div className="header" style={{ marginTop: "20px" }}>
          Register
        </div>
        <div className="content">
          <div className="imageLogIn">
            <img src={imageLogIn} alt="logIn" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={(event) => this.onChangeHandler(event)}
                id="username"
                type="text"
                name="username"
                placeholder="username"
              ></input>
              {this.state.errors.username && (
                <span
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
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
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                onChange={(event) => this.onChangeHandler(event)}
                id="email"
                type="text"
                name="email"
                placeholder="email@email.ro"
              ></input>
              {this.state.errors.email && (
                <span
                  style={{
                    color: "red",
                    fontSize: "14px",
                    marginBottom: "10px",
                  }}
                >
                  {this.state.errors.email}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to="/">
            <button className="btn" type="button">
              Register
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
