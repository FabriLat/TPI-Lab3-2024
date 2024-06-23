import { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>{

        if(theme ==="light"){
            document.body.style.backgroundColor = 'black'
            localStorage.setItem("theme", "dark");
            setTheme("black");
        }
        else{
            document.body.style.backgroundColor = '#817a9e';
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}