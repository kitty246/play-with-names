import React, {Component} from 'react';

export class Comment extends Component {
	_clickDeleteCommentButton() {
		this.props.deleteCommentButton({
			author: this.props.author,
			body: this.props.body
		})	
	}
  render() {
    return(
      <div>
        <div>{this.props.author}</div> 
        <div>{this.props.body}</div>
        <button onClick={this._clickDeleteCommentButton.bind(this)}>Delete Comment</button>
      </div>
    );
  }
}