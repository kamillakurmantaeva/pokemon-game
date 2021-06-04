import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import {
  getPokemonsAsync,
  selectPokemonsData,
} from '../../../../store/pokemons';
import s from './style.module.css';

const StartPage = () => {
  const { pokemon, setSelectedPokemons } = useContext(PokemonContext);
  // const isLoading = useSelector(selectPokemonsLoading);
  const pokemonsRedux = useSelector(selectPokemonsData);
  const dispatch = useDispatch();

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    dispatch(getPokemonsAsync());
  }, [dispatch]);

  useEffect(() => {
    setPokemons(pokemonsRedux);
  }, [pokemonsRedux]);

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
