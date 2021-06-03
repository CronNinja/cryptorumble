import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Cryptos from './pages/Cryptos';
import CryptoDetails from './components/CryptoDetails';
import CreateUser from './pages/CreateUser';
import UserAccount from './pages/UserAccount';
import { useState } from 'react';
import NotFound from './pages/NotFound';
import Login from './pages/Login'

function App() {
  const baseUser = {
    "username": "",
    "name": "",
    "password": "",
    "loggedIn": false
  }
  const [user, setUser] = useState(baseUser);
  const stateHandler = (u) => {
    setUser(u);
  }
  const setBaseUser = () => {
    setUser(baseUser);
  }
  const logoutHandeler = () => {
    setUser(baseUser);
  }
  return (
    <Router>
      <div className="App">
      <NavBar user={user} logout={ logoutHandeler }/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cryptos">
            <Cryptos />
          </Route>
          <Route path="/cryptos/:symbol">
            <CryptoDetails />
          </Route>
          <Route path="/signup">
            <CreateUser user={ user } stateHandler={stateHandler}/>
          </Route>
          <Route path="/login">
            <Login stateHandler={stateHandler}/>
          </Route>
          <Route path="/account">
            <UserAccount user={ user } setBaseUser={ setBaseUser } stateHandler={stateHandler}/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;