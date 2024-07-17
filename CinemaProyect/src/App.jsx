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
import MovieDetails from "./components/movieDetails/MovieDetails";

function App() {


  //-------------------------FUNCIONES MOVIES--------------------------------
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:8000/movies");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log("Error al solicitar películas a la base de datos:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // añadir pelicula
  const addMovieHandler = async (newMovie) => {
    try {
      await fetch("http://localhost:8000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie),
      });
      setMovies([newMovie, ...movies]);
    } catch (error) {
      console.log("Error al agregar película a la base de datos:", error);
    }
  };

  // eliminar pelicula
  const deleteMovieHandler = async (movieId) => {
    try {
      await fetch(`http://localhost:8000/movies/${movieId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      await fetchMovies(); // Actualizar la lista de películas después de eliminar una
    } catch (error) {
      console.log("Error al eliminar película de la base de datos:", error);
    }
  };

  // modificar pelicula

  const modifyMovieHandler = async (updatedMovie) => {
    try {
      await fetch(`http://localhost:8000/movies/${updatedMovie.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMovie),
      });
      setMovies(
        movies.map((movie) =>
          movie.id === updatedMovie.id ? updatedMovie : movie
        )
      );
    } catch (error) {
      console.log("Error al modificar pelicula en la base de datos:", error);
    }
  };

  //----------------------FUNCIONES USERS------------------------------

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    console.log("en app");

    try {
      const response = await fetch("http://localhost:8000/users");
      const usersData = await response.json();
      setUsers(usersData);
    } catch (error) {
      console.log("Error al solicitar usuarios a la base de datos:", error);
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

  const router = createBrowserRouter([
    //Para agregar rutas protegidas necesitamos terminar la cartelera q es una ruta protegida porque el dashboard,
    //el login y register podría acceder cualquiera, y para la cartelera se necesita loguear/registrar.
    { path: "/", element: <Dashboard /> },
    {
      path: "/login",
      element: <LogIn users={users} />,
    },
    { path: "/signin", element: <SignIn onRegister={addUserHandler} /> },
    {
      path: "/movies",
      element: <MoviesDashboard movies={movies} />,
    },

    {
      path: "/movie/:id",
      element: <MovieDetails />,
    },
    {
      path: "/userbase",
      element: (
        <Protected>
          <UserBase
            listUsers={users}
            onDeletUserHandler={onDeletUserHandler}
            addUser={addUserHandler}
            modifyUser={ModifyUserHandler}
          />
        </Protected>
      ),
    },
    {
      path: "/adminmovies",
      element: (
        <Protected>
          <AdminMoviesDashboard
            movies={movies}
            addMovieHandler={addMovieHandler}
            deleteMovieHandler={deleteMovieHandler}
            modifyMovieHandler={modifyMovieHandler}
          />
        </Protected>
      ),
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
