import { useContext, useEffect, useState } from 'react';
import PokemonCard from '../../../../components/PokemonCard';
import { FirebaseContext } from '../../../../context/firebaseContext';
import s from './style.module.css';

const StartPage = () => {
  const firebase = useContext(FirebaseContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };

  return (
    <div>
      <button className={s.buttonWrap}>Start Game</button>
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
