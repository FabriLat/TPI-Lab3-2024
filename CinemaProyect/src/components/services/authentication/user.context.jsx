import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const userValue = JSON.parse(localStorage.getItem("user"));

export const UserContextProvider = ({ children }) => {

    // estado para manejar log in
    const [user, setUser] = useState(userValue); // inicialmente no se logueó el usuario

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (  
    <UserContext.Provider value={{ user , setUser }}>
      {children}
    </UserContext.Provider>
  );
};

