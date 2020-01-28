var admin = require('firebase-admin');

var serviceAccount = require('./path/to/escribelocorrecto-c231e-firebase-adminsdk-7f7wv-9de1d9e4f2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://escribelocorrecto-c231e.firebaseio.com',
});

const db = admin.firestore();

module.exports = db;
