import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDV1VhHO04xqoDL77kps6pQQnzMF4Vpz9Q',
  authDomain: 'pokemon-game-7d392.firebaseapp.com',
  databaseURL: 'https://pokemon-game-7d392-default-rtdb.firebaseio.com',
  projectId: 'pokemon-game-7d392',
  storageBucket: 'pokemon-game-7d392.appspot.com',
  messagingSenderId: '586586220656',
  appId: '1:586586220656:web:04ff85061536eb45206cb5',
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
