import React, {Component} from 'react';

export class CommentForm extends Component {
  _clickSendCommentButton() {
    this.props.sendCommentButton({
      author: this.author.value,
      body: this.body.value
    })
    this.author.value='',
    this.body.value=''
  }
  render() {
    return(
      <div>
        <div className='author-input'>
          <label for='author'>Name</label>
          <input name='content' id='author' ref={input => this.author = input}/>
        </div>
        <div className='body-input'>
          <label for='body'>Content</label>
          <input name='content' id='body' ref={input => this.body = input}/>
        </div>
        <button onClick={this._clickSendCommentButton.bind(this)}>Send Comment</button>
      </div>
    );
  }
}