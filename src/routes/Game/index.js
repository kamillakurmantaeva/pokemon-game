import { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import database from '../../service/firebase';
import s from './style.module.css';

const DATA = { id: 12345 };

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  const getPokemons = () => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  };

  useEffect(() => getPokemons(), []);

  const setActiveDatabase = (key, id) => {
    database
      .ref('pokemons/' + key)
      .update({
        active: !pokemons[id].active,
      })
      .then(() =>
        setPokemons((prevState) => {
          const state = { ...prevState };
          state[key] = { ...state[key], active: !state[key].active };
          return state;
        })
      );
  };

  const setActive = (key, id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
          setActiveDatabase(key, id);
        }
        acc[item[0]] = pokemon;
        database.ref('pokemons/' + item[0]).set(pokemon);
        return acc;
      }, {});
    });
  };

  const handleClick = () => {
    const data = DATA;
    const newKey = database.ref().child('pokemons').push().key;
    database
      .ref('pokemons/' + newKey)
      .set(data)
      .then(() => getPokemons());
  };

  return (
    <div>
      <button onClick={handleClick}>Add new pokemon</button>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, active }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={active}
              setActive={setActive}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GamePage;
