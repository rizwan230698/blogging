import React, { useReducer } from 'react';
import jwtDecode from 'jwt-decode';

const getInitailState = () => {
  if (localStorage.getItem('currentUser')) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.token;
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('currentUser');
      return {};
    } else {
      return currentUser;
    }
  } else {
    return {};
  }
};

export const AuthContext = React.createContext({
  data: { user: null, token: '' },
  login: (data) => {},
  logout: () => {},
});

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: '',
      };
    default:
      return state;
  }
};

const initialState = getInitailState();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (userData) => {
    localStorage.setItem('currentUser', JSON.stringify(userData));
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, token: state.token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
