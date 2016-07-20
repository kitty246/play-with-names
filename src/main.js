import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Name} from './name';

// import Bootstrap from 'react-bootstrap';

import {Button, Modal} from 'react-bootstrap';
const {Header, Body, Footer, Title} = Modal;

class Trigger extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
  }

  render() {
    let close = () => this.setState({ showModal: false});

    return (
      <div className="modal-container" style={{background: gray}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ showModal: true})}
        >
          Click me!
        </Button>

        <Modal
          show={this.state.showModal}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Header closeButton>
            <Title id="contained-modal-title">Greeting!</Title>
          </Header>
          <Body>
            Hello, Meocon!
          </Body>
          <Footer>
            <Button onClick={close}>See ya!</Button>
          </Footer>
        </Modal>
      </div>
    );
  }
};

ReactDOM.render(<Trigger />, document.getElementById('root'));
