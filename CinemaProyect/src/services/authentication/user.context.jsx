import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const userValue = JSON.parse(localStorage.getItem("user"));

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(userValue); 

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

