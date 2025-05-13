import { Typography } from '@mui/material';
import logo from '../assets/logo.svg'
import '../styles/header.css'
import '../styles/index.css'

function Header() {
  const username: string = 'username'; // TO DO: replace with stored username

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} className="logo-image" alt="logo" />
          <Typography variant="h4" align="center">
            Meadow
          </Typography>
        </div>
        
        <nav className="main-nav">
          <Typography variant="h6" align="center">
            Welcome back, {username}!
          </Typography>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;