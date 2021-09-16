import { Route } from 'react-router-dom';
import './App.scss';
import { Main } from './Main';
import Menu from './Menu';
import Level1Container from './Level1Container';
import GameOver from './gameOver';
import GameWin from './gameWin';

function App() {
  return (
    <div className="App">
      <Route exact path={["/", "/main"]} render={() => <Main />} />
      <Route path="/menu" render={() => <Menu />} />
      <Route path="/level1" render={() => <Level1Container />} />
      <Route path="/gameover" render={() => <GameOver />} />
      <Route path="/gamewin" render={() => <GameWin />} />
    </div>
  );
}

export default App;
