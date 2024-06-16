import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/signIn/SignIn";
import LogIn from "./components/logIn/LogIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesDashboard from "./components/moviesDashboard/MoviesDashboard";
import Protected from "./routes/Protected";
import NotFound from "./routes/NotFound";
function App() {
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

  //Cliente creado de prueba (todos van a tener los mismos atributos/propiedades)
  const clients = [
    {
      username: "Fabri",
      email: "Fabri@gmail.com",
      password: "12345",
      showsBuyed: "",
      type: "client",
    },
  ];

  //Una pelicula puede tener varias funciones.
  const initialMovies = [
    {
      id: 1,
      title: "Shrek",
      image: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg",
      rating: 5.0,
      runTime: 89,
      shows: [{}, {}, {}],
    },
    {
      id: 2,
      title: "Oppenheimer",
      image:
        "https://www.rosariocine.com.ar/webfiles/rosariocine/productos/5132/1.jpg",
      rating: 5.0,
      runTime: 180,
      shows: [{}, {}, {}],
    },
    {
      id: 3,
      title: "Hostel",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTY1NDA3ODM1OV5BMl5BanBnXkFtZTcwMDM5NzEzMQ@@._V1_.jpg",
      rating: 4.0,
      runTime: 94,
      shows: [{}, {}, {}],
    },
    {
      id: 4,
      title: "Saw",
      image:
        "https://m.media-amazon.com/images/I/61Dr1uVEjWL._AC_UF894,1000_QL80_.jpg",
      rating: 4.0,
      runTime: 103,
      shows: [{}, {}, {}],
    },
  ];

  const [movies, setMovies] = useState(initialMovies); // estado para manejar películas. (ABM)

  const router = createBrowserRouter([
    //Para agregar rutas protegidas necesitamos terminar la cartelera q es una ruta protegida porque el dashboard,
    //el login y register podría acceder cualquiera, y para la cartelera se necesita loguear/registrar.
    { path: "/", element: <Dashboard /> },
    {
      path: "/login",
      element: <LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />,
    },
    { path: "/register", element: <SignIn /> },
    {
      path: "/movies",
      // ruta protegida, solo si te logueaste podes acceder. XD
      element: (
        <Protected isLoggedIn={isLoggedIn}>
          <MoviesDashboard initialMovies={initialMovies} />
        </Protected>
      ),
    },
    { path: "*", element: <NotFound/> }, // cuando no encuentra ninguna ruta, not found
  ]);

  return <div>{<RouterProvider router={router} />}</div>;
}

export default App;
