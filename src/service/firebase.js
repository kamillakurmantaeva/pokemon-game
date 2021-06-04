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

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val());
    });
  };

  offPokemonSoket = () => {
    this.database.ref('pokemons').off();
  };

  getPokemonsOnce = async () => {
    return await this.database
      .ref('pokemons')
      .once('value')
      .then((snapshot) => snapshot.val());
  };

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database
      .ref('pokemons/' + newKey)
      .set(data)
      .then(() => cb());
  };
}

const FirebaseClass = new Firebase();

export default FirebaseClass;
