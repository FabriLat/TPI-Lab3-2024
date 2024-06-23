import { useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/signIn/SignIn";
import LogIn from "./components/logIn/LogIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MoviesDashboard from "./components/moviesDashboard/MoviesDashboard";
import Protected from "./routes/Protected";
import NotFound from "./routes/NotFound";
import UserBase from "./components/userBase/UserBase";

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

  //--------------------------------------------------------------------------------------------------------------------------------------
  //UserBase
  const Users = [
    {
      id: 1,
      username: "Fabri",
      email: "Fabri@gmail.com",
      password: "12345",
      showsBuyed: "",
      type: "client",
    },
    {
      id: 2,
      username: "Rosa",
      email: "rosita@gmail.com",
      password: "12345",
      showsBuyed: "",
      type: "client",
    },
    {
      id: 3,
      username: "Pepito",
      email: "elpepe@gmail.com",
      password: "12345",
      showsBuyed: "",
      type: "client",
    },
    {
      id: 4,
      username: "Juani",
      email: "juani@gmail.com",
      password: "12345",
      showsBuyed: "",
      type: "client",
    },
    {
      id: 5,
      username: "Gaston",
      email: "fercho@gmail.com",
      password: "12345",
      showsBuyed: "",
      type: "client",
    },
    {
      id: 6,
      username: "Tomi",
      email: "wuawua@gmail.com",
      password: "12345",
      showsBuyed: "",
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
  //--------------------------------------------------------------------------------------------------------------------------------------

  //Una pelicula puede tener varias funciones.
  const initialMovies = [
    {
      id: 1,
      title: "Shrek",
      image: "https://es.web.img3.acsta.net/pictures/14/03/06/10/13/369709.jpg",
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
    {
      id: 5,
      title: "Tierra de osos",
      image:
        "https://play-lh.googleusercontent.com/-7Gl_ipbT697kSJdJb8R_xyEACLSHMjGEXtvIpFSRxaqbXaJiWlu-rJ6VHmRgQaoCKFB=w240-h480-rw",
      rating: 3.5, // Ejemplo de rating
      runTime: 85, // Ejemplo de duración en minutos
      shows: [{}, {}, {}],
    },
    {
      id: 6,
      title: "Toy Story",
      image: "https://es.web.img3.acsta.net/pictures/14/03/17/10/20/509771.jpg",
      rating: 4.8, // Ejemplo de rating
      runTime: 81, // Ejemplo de duración en minutos
      shows: [{}, {}, {}],
    },
    {
      id: 7,
      title: "El señor de los anillos",
      image:
        "https://es.web.img3.acsta.net/medias/nmedia/18/89/67/45/20061512.jpg",
      rating: 4.9, // Ejemplo de rating
      runTime: 178, // Ejemplo de duración en minutos
      shows: [{}, {}, {}],
    },
    {
      id: 8,
      title: "Anabelle",
      image: "https://www.ecartelera.com/carteles/7900/7931/002_m.jpg",
      rating: 3.2, // Ejemplo de rating
      runTime: 109, // Ejemplo de duración en minutos
      shows: [{}, {}, {}],
    },
    {
      id: 9,
      title: "Titanes del Pacífico",
      image:
        "https://i.pinimg.com/736x/17/e1/44/17e144b2e0e49c835fb4092321fefeea.jpg",
      rating: 3.7, // Ejemplo de rating
      runTime: 131, // Ejemplo de duración en minutos
      shows: [{}, {}, {}],
    },
    {
      id: 10,
      title: "John Wick",
      image: "https://es.web.img3.acsta.net/pictures/14/10/01/14/18/135831.jpg",
      rating: 4.5, // Ejemplo de rating
      runTime: 101, // Ejemplo de duración en minutos
      shows: [{}, {}, {}],
    },
    {
      id: 11,
      title: "Cars",
      image: "https://es.web.img2.acsta.net/pictures/14/05/28/11/24/435900.jpg",
      rating: 4.3, // Ejemplo de rating
      runTime: 117, // Ejemplo de duración en minutos
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
    { path: "/signin", element: <SignIn /> },
    {
      path: "/movies",
      // ruta protegida, solo si te logueaste podes acceder. XD
      element: (
        <Protected isLoggedIn={isLoggedIn}>
          <MoviesDashboard initialMovies={initialMovies} />
        </Protected>
      ),
    },
    {
      path: "/userbase",
      element: (
        <UserBase
          listUsers={listUsers}
          onDeletUserHandler={onDeletUserHandler}
        />
      ),
    },
    { path: "*", element: <NotFound /> }, // cuando no encuentra ninguna ruta, not found
  ]);

  return (
  
  <div>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
