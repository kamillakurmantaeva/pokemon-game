import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PokemonCard from '../../components/PokemonCard';
import database from '../../service/firebase';
import s from './style.module.css';

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const setActiveDatabase = (id) => {
    database.ref('pokemons/' + id).set({
      active: !pokemons[id].active,
    });
  };

  const setActive = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = true;
          setActiveDatabase(id);
        }
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  };

  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div>
      <button onClick={handleClick}>Back</button>
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
              setActive={() => setActive(id, key)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default GamePage;
