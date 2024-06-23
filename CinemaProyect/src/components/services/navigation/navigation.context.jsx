import { createContext, useState } from "react";


export const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
    
    // items del nav
  const [navItems, setNavItems] = useState([
    {id: 1, text: "Cambiar tema"},
    { id: 2, text: 'Sobre Nosotros', link: '/about' },
    { id: 3, text: 'Cartelera', link: '/movies' },
    { id: 4, text: 'Iniciar sesión', link: '/login' },
    { id: 5, text: "Registrarse", link: '/signin'},
  ]);

  // funcion q actualizara los items
  const updateNavItems = (newItems) =>{
    setNavItems(newItems);
  };

  // lo pasa el proveedor
  return (
    <NavigationContext.Provider value={{ navItems, updateNavItems }}>
      {children}
    </NavigationContext.Provider>
  );
};
