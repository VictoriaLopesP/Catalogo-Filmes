import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavbarContainer, NavbarLink, NavbarLinks } from '../styles/styled';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleProfileClick = () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return ( 
    <NavbarContainer>
      <NavbarLinks>
        <NavbarLink to="/">Home</NavbarLink>
        <button onClick={handleProfileClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </button>
      </NavbarLinks>
    </NavbarContainer>    
  );
};

export default Navbar;
