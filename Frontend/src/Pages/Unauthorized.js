import { Link } from 'react-router-dom';

export const Unauthorized = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>You don't have permission to access this page. Please contact your administrator or login with an account that has the required permissions.</p>
      <Link to="/login">Login</Link>
      <Link to="/">Go Home</Link>
    </div>
  );
};