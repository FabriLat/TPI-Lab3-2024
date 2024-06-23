import { useContext, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/signIn/SignIn";
import LogIn from "./components/logIn/LogIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesDashboard from "./components/moviesDashboard/MoviesDashboard";
import Protected from "./routes/Protected";
import NotFound from "./routes/NotFound";
import UserBase from "./components/userBase/UserBase";
import { useEffect } from "react";

function App() {

  const [movies, setMovies] = useState([]);

  //------------------------------------------------------------------------------
  // FETCHEO A MOVIES
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8000/movies");
        const movieData = await response.json();
        setMovies(movieData);
      } catch (error) {
        console.log("Error al solicitar películas a la base de datos:", error);
      }
    };
    fetchMovies();
  }, []); 
  // -----------------------------------------------------------------------------------------------------------------------------------------------------------

  // estado para manejar log in
  const [isLoggedIn, setIsLoggedIn] = useState(false); // inicialmente no se logueó el usuario

  //Arreglo incial de funciones y peliculas (falta llenar los datos vacios)
  //Una funcion tiene 100 asientos, cuando llega a 0 available cambia a false.
  const show = {
    id: 1,
    movie: "shrek",
    time: "19:30",
    date: "18/5",
    seats: 100,
    available: true,
  };

  //arreglo de tickets vacío, se empiezan a generar al sacar una entrada.
  const movieTicket = [
    { price: 0, movie: "movie", show: "show", client: "client" },
  ];

  //--------------------------------------------------------------------------------------------------------------------------------------
  //UserBase
  const Users = [
    {
      id: 1,
      userName: "Fabri",
      email: "Fabri@gmail.com",
      password: "12345",
      showsBuyed: [],
      type: "client",
    },
    {
      id: 2,
      userName: "Rosa",
      email: "rosita@gmail.com",
      password: "12345",
      showsBuyed: [],
      type: "client",
    },
    {
      id: 3,
      userName: "Pepito",
      email: "elpepe@gmail.com",
      password: "12345",
      showsBuyed: [],
      type: "client",
    },
    {
      id: 4,
      userName: "Juani",
      email: "juani@gmail.com",
      password: "12345",
      showsBuyed: [],
      type: "client",
    },
    {
      id: 5,
      userName: "Gaston",
      email: "fercho@gmail.com",
      password: "12345",
      showsBuyed: [],
      type: "client",
    },
    {
      id: 6,
      userName: "Tomi",
      email: "wuawua@gmail.com",
      password: "12345",
      showsBuyed: [],
      type: "client",
    },
  ];
  //estado de lista de usuarios (luego debera remplazarce la constante por la base de datos y que los cambios impacten en ella)
  const [listUsers, setListUser] = useState(Users);

  //Funcion que elimina el usuario de la lista
  const onDeletUserHandler = (idUserDelete) => {
    const listUpdated = listUsers.filter((user) => user.id !== idUserDelete);
    setListUser(listUpdated);
  };

  //Funcion para agregar usuario a la base (luego debera remplazarce la constante por la base de datos y que los cambios impacten en ella)
  const addUserHandler = (user) => {
    const newUser = { ...user };
    setListUser((prev) => [newUser, ...prev]);
  };

  const ModifyUserHandler = (idUser, data) => {
    const listUpdated = listUsers.map((user) => {
      if (user.id === idUser) {
        return {
          ...user,
          userName: data.uName,
          email: data.email,
          type: data.rol,
        };
      }
      return user; // Devuelve el usuario original si no es el que se está modificando
    });

    setListUser(listUpdated);
  };

  const router = createBrowserRouter([
    //Para agregar rutas protegidas necesitamos terminar la cartelera q es una ruta protegida porque el dashboard,
    //el login y register podría acceder cualquiera, y para la cartelera se necesita loguear/registrar.
    { path: "/", 
      element: <Dashboard /> },
    {
      path: "/login",
      element: <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
    },
    { path: "/signin", 
      element: <SignIn /> },
    {
      path: "/movies",
      // ruta protegida, solo si te logueaste podes acceder. XD
      element: (
        <Protected isLoggedIn={isLoggedIn}>
          <MoviesDashboard movies={movies} />
        </Protected>
      ),
    },
    {
      path: "/userbase",
      element: (
        <UserBase
          listUsers={listUsers}
          onDeletUserHandler={onDeletUserHandler}
          addUser={addUserHandler}
          modifyUser={ModifyUserHandler}
        />
      ),
    },
    { path: "*", 
      element: <NotFound /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
