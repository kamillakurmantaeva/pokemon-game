import { Route, Switch, useRouteMatch } from 'react-router';
import { PokemonContext } from '../../context/pokemonContext';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';
import StartPage from './routes/Start';
// import s from './style.module.css';

const GamePage = () => {
  const match = useRouteMatch();
  return (
    <PokemonContext.Provider value={{ pokemon: [] }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
