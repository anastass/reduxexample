import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "./Postform.css";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input
              className="postForm"
              onChange={this.onChange}
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              // placeholder="<title>"
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <br />
            <textarea
              className="postForm"
              onChange={this.onChange}
              name="body"
              id="body"
              value={this.state.body}
              // placeholder="<body>"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
