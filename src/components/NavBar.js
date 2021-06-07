import { Container, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const NavBar = ({ user, logout, handleShowOpen }) => {
    return (
      <Navbar>
        <Container>
        <Navbar.Brand to="/" as={ Link }>
          <img
            src="./images/logo-40x40.png"
            width="40"
            height="40"
            className="d-inline-block align-bottom"
            alt="GBC Logo"
          />{' '}
          Gay Bear Capital
        </Navbar.Brand>
          <Link to="/inventory">Inventory</Link>
          { user.loggedIn &&
              <NavDropdown  title={ user.username }id="basic-nav-dropdown">
                <NavDropdown.Item to="/account" as={ Link }>My Account</NavDropdown.Item>
                <NavDropdown.Item to="/" as={ Link } onClick={ logout }>Logout</NavDropdown.Item>
              </NavDropdown>
            }
          { !user.loggedIn && 
            <>
              <Link to={`/login`}>Login</Link>
              <Link to={`/signup`}>Signup</Link>
            </>
          }
          <Button variant="primary" onClick={handleShowOpen}>
            Cart
        </Button>
        </Container>
      </Navbar>
    );
  }
   
  export default NavBar;