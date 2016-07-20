import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Comment} from './comment';
import {CommentForm} from './comment_form';

class CommentBox extends Component {
  constructor() {
    super();
    this.state = ({
      commentList : [
        {
          author: 'Duong Nhat Tan',
          body: 'Rung xanh hoa chuoi do tuoi'
        },
        {
          author: 'Truong Thi Ho Thanh',
          body: 'Deo cao nang anh dao gai that lung'
        }
      ]
    })
  }
  _sendCommentButton(comment) {
    let newComment = this.state.commentList;
    newComment.push(comment);
    this.setState({
      commentList: newComment
    })
  }

  _deleteCommentButton(comment) {
    let deleteComment = this.state.commentList;
    
    deleteComment = deleteComment.filter(deleteCommentData =>(
      (deleteCommentData.author !== comment.author) || 
      (deleteCommentData.body !== comment.body)
    ))

    this.setState({
      commentList: deleteComment
    })
  }

  _getComment() {
    return this.state.commentList.map(commentData =>(
      <Comment 
        author={commentData.author} 
        body={commentData.body} 
        sendCommentButton={this._sendCommentButton.bind(this)}
        deleteCommentButton={this._deleteCommentButton.bind(this)}/>
      )
    );
   }

  render() {
    return(
      <div>
        <CommentForm 
          sendCommentButton={this._sendCommentButton.bind(this)} 
          deleteCommentButton={this._deleteCommentButton.bind(this)}/>
        <div>{this._getComment()}</div>
      </div>
    );
  }
}

ReactDOM.render(<CommentBox/>, document.getElementById('root'));