// Navbar.jsx
import './Navbar.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
// import logo from '../assets/evolvingx-logo.png'; // Update path if needed

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* <img src={logo} alt="EvolvingX" /> */}
        <span className="logo-text">EvolvingX</span>
      </div>

      <div className="navbar-right">
        {['Home', 'About Us', 'Quiz', 'Contact Us'].map((label) => (
          <DropdownButton
            as={ButtonGroup}
            key={label}
            id={`dropdown-variants-${label}`}
            title={label}
            className="dropdown-button"
            variant="light"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Separated link</Dropdown.Item>
          </DropdownButton>
        ))}

        <Button variant="primary" className="login-button">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
