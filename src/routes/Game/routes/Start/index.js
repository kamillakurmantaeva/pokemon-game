import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import { FirebaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FirebaseContext);
  const { pokemon, setSelectedPokemons } = useContext(PokemonContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, [firebase]);

  const handleChangeSelected = (key) => {
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));

    if (!pokemon[key]) {
      setSelectedPokemons((prevState) => ({
        ...prevState,
        [key]: { ...pokemons[key] },
      }));
    } else {
      delete pokemon[key];
    }
  };

  return (
    <div className={s.root}>
      <Link to="game/board">
        <button className={s.buttonWrap}>Start Game</button>
      </Link>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              setActive={() => handleChangeSelected(key)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default StartPage;
