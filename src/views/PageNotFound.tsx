import { Typography } from '@mui/material';
import '../styles/pageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="fullscreen">
      <div className='content'>
        <Typography variant="h3" align="center" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          Sorry, the page you are looking for could not be found.
        </Typography>
      </div>
    </div>
  );
}
  
export default PageNotFound;