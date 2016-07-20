import React, {Component} from 'react';

export class Comment extends Component {
  render() {
    return(
      <div>
        <div>{this.props.author}</div> 
        <div>{this.props.body}</div>
        hello
      </div>
    );
  }
}