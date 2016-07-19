import firebase from 'firebase/app';
// all 3 are optional and you only need to require them at the start
// from ('firebase/auth');
// from ('firebase/database');
// from ('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyCQ53rGoOfrCWQQC9SicdVJ3MCM9cwMJJ0",
  authDomain: "play-with-names.firebaseapp.com",
  databaseURL: "https://play-with-names.firebaseio.com",
  storageBucket: "play-with-names.appspot.com",
};

firebase.initializeApp(firebaseConfig);

// ref.authAnonymously(function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// }, {
//   remember: "sessionOnly"
// });

// ref.on("child_changed", function(snapshot) {
//   var changedPost = snapshot.val();
//   console.log("The updated post title is " + changedPost.title);
// });


class Name {
  static create(first, last) {
    // A name entry.
    var nameData = { first, last };

    // Get a key for a new name.
    var newNameKey = firebase.database().ref().child('names').push().key;

    // Write the new name's data simultaneously in the names list and the user's name list.
    var updates = {};
    updates['/names/' + newNameKey] = nameData;
    return firebase.database().ref().update(updates);
  }

  static update(nameRef, {first, last}) {
    nameRef.transaction(function(name) {
      if (name) {
        name.first =  name.first || first;
        name.last  =  name.last || last;
      }

      return name;
    });
  }

  static read() {
    let recentNamesRef = firebase.database().ref('names').limitToFirst(100);
    debugger;
    return 1;
  }
}

debugger;

import Component from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';
import {Header, Body, Footer, Title} from 'react-bootstrap/lib/Modal';


class Trigger extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  render() {
    let close = () => this.setState({ show: false});

    return (
      <div className="modal-container" style={{height: 200}}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true})}
        >
          Launch contained modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Header closeButton>
            <Title id="contained-modal-title">Contained Modal</Title>
          </Header>
          <Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
          </Body>
          <Footer>
            <Button onClick={close}>Close</Button>
          </Footer>
        </Modal>
      </div>
    );
  }
};

ReactDOM.render(<Trigger />, document.getElementById('root'));
