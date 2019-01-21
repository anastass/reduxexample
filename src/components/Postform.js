import React, { Component } from "react";
import "./Postform.css";

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

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
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

export default PostForm;
