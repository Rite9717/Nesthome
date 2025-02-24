import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export const PrivateRoute = ({ children, requiredRoles = [] }) => {
  const { user, hasRole } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRoles.length > 0 && !requiredRoles.some(role => hasRole(role))) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};