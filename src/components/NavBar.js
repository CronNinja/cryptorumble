import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const NavBar = ({user, logout}) => {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>Crypto Rumble</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/cryptos">Cryptos</Link>
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
        </Container>
      </Navbar>
    );
  }
   
  export default NavBar;