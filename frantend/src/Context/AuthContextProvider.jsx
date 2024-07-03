import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authDetails, setAuthDetails] = useState({
    isLoggedIn: false,
    token: null,
    email: null,
  });
  const login = (token, email) => {
    setAuthDetails({
      isLoggedIn: true,
      token: token,
      email: email,
    });
  };
  const logout = () => {
    setAuthDetails({
      isLoggedIn: false,
      token: null,
      email: null,
    });
  };
  return (
    <AuthContext.Provider value={{ authDetails, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
