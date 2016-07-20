import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Comment} from './comment';
import {CommentForm} from './comment_form';

class CommentBox extends Component {
  // _getComment() {
  //   const commentList = 
  // }

  render() {
    return(
      <div>
        <Comment author='Tan Duong' body='Minh ve minh co nho ta'/>
        <Comment author='Thanh Truong' body='Ta ve ta nho nhung hoa cung nguoi'/>
      </div>
    );
  }
}

ReactDOM.render(<CommentBox/>, document.getElementById('root'));