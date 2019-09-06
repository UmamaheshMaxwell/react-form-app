import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react"
    };
  }

  changeHandler = e => {
    this.setState({ username: e.target.value });
  };

  handleCommentsChange = e => {
    this.setState({ comments: e.target.value });
  };

  handleTopicChange = e => {
    this.setState({ topic: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <div className="container">
        <h2>User Form </h2>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username </label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="">Comments</label>
            <textarea
              type="text"
              className="form-control"
              value={comments}
              onChange={this.handleCommentsChange}
            />
          </div>
          <div>
            <label htmlFor="">Topic</label>
            <select
              className="form-control"
              value={topic}
              onChange={this.handleTopicChange}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <br />
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
