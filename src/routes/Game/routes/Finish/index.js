import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';
import { FirebaseContext } from '../../../../context/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './style.module.css';

const FinishPage = () => {
  const { pokemon, setSelectedPokemons, pokemonsEnemy } = useContext(
    PokemonContext
  );
  const firebase = useContext(FirebaseContext);
  const [isSelected, setSelected] = useState(null);
  const history = useHistory();

  if (
    Object.keys(pokemon).length === 0 ||
    Object.keys(pokemonsEnemy).length === 0
  ) {
    history.replace('/game');
  }

  const handleClickAddPokemon = () => {
    setSelectedPokemons({});
    isSelected && firebase.addPokemon(pokemonsEnemy[isSelected], () => {});
  };

  return (
    <div className={s.root}>
      <div className={s.flex}>
        {Object.entries(pokemon).map(
          ([key, { name, img, id, type, values }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
            />
          )
        )}
      </div>
      <Link to="/game">
        <button className={s.buttonWrap} onClick={handleClickAddPokemon}>
          End Game
        </button>
      </Link>
      <div className={s.flex}>
        {Object.entries(pokemonsEnemy).map(
          ([key, { name, img, id, type, values }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={isSelected === key}
              setActive={() => setSelected(key)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FinishPage;
