import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/signIn/SignIn";
import LogIn from "./components/logIn/LogIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesDashboard from "./components/moviesDashboard/MoviesDashboard";
import Protected from "./routes/Protected";
import NotFound from "./routes/NotFound";
import UserBase from "./components/userBase/UserBase";
import AdminMoviesDashboard from "./components/adminMoviesDashboard/AdminMoviesDashboard";

function App() {
  const [movies, setMovies] = useState([]);

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

  //--------------------------------------------------------------------------------------------------------------------------------------
  // Funciones relacionadas con usuarios

  // estado para manejar log in
  const [isLoggedIn, setIsLoggedIn] = useState(false); // inicialmente no se logueó el usuario

  const [users, setUsers] = useState([]);

  // FETCHEO A USERS
  const fetchUsers = async () => {
    // intenta fetchear
    try {
      const response = await fetch("http://localhost:8000/users");
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      // si no puede, muestra error
      console.log("Error al solicitar películas a la base de datos:", error);
    }
  };

  //Inicializacion de estado users con montado de app
  useEffect(() => {
    fetchUsers();
  }, []);

  //--------------------------------------------FUNCIONES USERBASE-------------------------------------------------------------------------------
  //Funcion que elimina el usuario de la lista
  const onDeletUserHandler = async (idUserDelete) => {
    try {
      await fetch(`http://localhost:8000/users/${idUserDelete}`, {
        method: "DELETE",
      });

      await fetchUsers();
    } catch (error) {
      console.log("Error al eliminar usuario de la base de datos:", error);
    }
  };

  // Funcion para agregar usuario
  const addUserHandler = async (user) => {
    try {
      await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      await fetchUsers();
    } catch (error) {
      console.log("Error al agregar usuario a la base de datos:", error);
    }
  };

  // Funcion para modificar usuario
  const ModifyUserHandler = async (idUser, data) => {
    try {
      // Obtengo el usuario a modificar
      const response = await fetch(`http://localhost:8000/users/${idUser}`);
      const currentUser = await response.json();

      // Combino los datos nuevos con los datos existentes
      const updatedUser = {
        ...currentUser,
        ...data,
      };

      // Actualizo el usuario en la base sin que se eliminen sus propiedades que no son modificadas
      await fetch(`http://localhost:8000/users/${idUser}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      await fetchUsers();
    } catch (error) {
      console.log("Error al modificar usuario en la base de datos:", error);
    }
  };
  //--------------------------------------------------------------------------------------------------------------------------------------

  const loginUserHandler = (user) => {
    const loginUser = users.filter(
      (u) =>
        (u.userName === user.userName || u.email === user.email) &&
        u.password === user.password
    );
    if (loginUser.length > 0) {
      console.log(loginUser);
      setIsLoggedIn(true);
      return true;
    } else {
      setIsLoggedIn(false);
      alert("Usuario o contraseña incorrecto. Intente nuevamente.");
      return;
    }
  };

  //--------------------------------------------------------------------------------------------------------------------------------------

  const router = createBrowserRouter([
    //Para agregar rutas protegidas necesitamos terminar la cartelera q es una ruta protegida porque el dashboard,
    //el login y register podría acceder cualquiera, y para la cartelera se necesita loguear/registrar.
    { path: "/", element: <Dashboard /> },
    {
      path: "/login",
      element: <LogIn onLogin={loginUserHandler} />,
    },
    { path: "/signin", element: <SignIn onRegister={addUserHandler} /> },
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
          listUsers={users}
          onDeletUserHandler={onDeletUserHandler}
          addUser={addUserHandler}
          modifyUser={ModifyUserHandler}
        />
      ),
    },
    { path: "/adminmovies",
      element: <AdminMoviesDashboard movies={movies}/>
    },
    { path: "*", element: <NotFound /> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
