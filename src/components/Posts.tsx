import React, { Component } from "react";
import "./Posts.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "reactstrap";
import { IPostState, IPost } from './types';

class Posts extends Component {
  state: IPostState;

  constructor(props: any) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <hr />
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <Alert color="primary">This is a primary alert — check it out!</Alert>
        {postItems}
      </div>
    );
  }
}

export default Posts;
