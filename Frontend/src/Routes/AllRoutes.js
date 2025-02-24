import { Route, Routes } from 'react-router-dom';
import { Login, Register, Home, Contact, Services, Unauthorized } from '../Pages';
import { PrivateRoute } from '../components/PrivateRoute';
import { AuthProvider } from '../auth/AuthContext';

export const AllRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Protected Routes */}
        <Route
          path="/students"
          element={
            <PrivateRoute requiredRoles={['USER', 'PROFESSIONAL', 'ADMIN']}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/create"
          element={
            <PrivateRoute requiredRoles={['PROFESSIONAL', 'ADMIN']}>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/delete/:id"
          element={
            <PrivateRoute requiredRoles={['ADMIN']}>
              <Services />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};