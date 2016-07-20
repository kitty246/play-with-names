import firebase from 'firebase/app';
require('firebase/database');
require('firebase/auth');
require('firebase/storage');

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


export class Name {
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
    recentNamesRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val())
      });
    });
    return 1;
  }
}
