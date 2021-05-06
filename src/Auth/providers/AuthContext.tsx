import React, {createContext, useContext, useState} from 'react';


const AuthContext = createContext <any>(
  {token: null, isAuthenticated: false, setToken: 1 }
  );

const AuthContextProvider  = ({ children }: any) => {
  const [token, setToken] = useState(null);
  const isAuthenticated = token !== null;
  return (
    <AuthContext.Provider value={{ token, isAuthenticated, setToken }}>
      { children }
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext)

export default AuthContextProvider;
