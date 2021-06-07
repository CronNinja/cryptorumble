import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import UserAccount from './pages/UserAccount';
import { useState } from 'react';
import NotFound from './pages/NotFound';
import Login from './pages/Login'
import Inventory from './pages/Inventory';
import InventoryDetails from './pages/InventoryDetails';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [showCart, setShowCart] = useState(false);
  const handleShowClose = () => setShowCart(false);
  const handleShowOpen = () => setShowCart(true);
  const [cart, setCart] = useState([]);

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
      <NavBar user={user} logout={ logoutHandeler } handleShowOpen={ handleShowOpen }/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route path="/inventory/:id">
            <InventoryDetails cart={ cart } setCart={ setCart }/>
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
        <ShoppingCart handleShowClose={ handleShowClose } showCart={ showCart } cart={ cart } setCart={ setCart }/>
      </div>
    </div>
    </Router>
  );
}

export default App;