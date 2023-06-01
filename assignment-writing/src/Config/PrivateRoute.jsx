import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const id = localStorage.getItem('LoggedIn');

  return (
      <Route
        {...rest}
        element={
          id && localStorage.hasOwnProperty('LoggedIn') ? (
            <Element />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
  );
};

export default PrivateRoute;
