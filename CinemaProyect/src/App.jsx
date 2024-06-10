import { useState } from 'react'
import Dashboard from './components/dashboard/Dashboard';
import SignInDashboard from './components/signInDashboard/SignInDashboard';
import LogInDashboard from './components/logInDashboard/LogInDashboard';


function App() {

  //Arreglo incial de funciones y peliculas (falta llenar los datos vacios)
  //Una funcion tiene 100 asientos, cuando llega a 0 available cambia a false.
  const show = {id:1,movie:"shrek" ,time:"19:30",date:"18/5",seats:100,available: true};
  
  //arreglo de tickets vacío, se empiezan a generar al sacar una entrada.
  const movieTicket = [{price: 0,movie: "movie",show:"show",client: "client"}]

  const clients = [{username: "", email: "", password: "", showsBuyed: "", type:"client"}]

  //Una pelicula puede tener varias funciones. 
  const initialMovies = [{id:1, title:"Shrek" ,image: "https://pics.filmaffinity.com/Shrek-903764423-large.jpg",rating:5.0, runTime:89,shows: [{},{},{}]},
                {id:2,title:"Openheimmer",image:"https://www.rosariocine.com.ar/webfiles/rosariocine/productos/5132/1.jpg",rating: 5.0, runTime: 180, shows: [{},{},{}]},
                {id:3, title:"Hostel",image:"https://m.media-amazon.com/images/M/MV5BMTY1NDA3ODM1OV5BMl5BanBnXkFtZTcwMDM5NzEzMQ@@._V1_.jpg",rating: 4.0, runTime: 94, shows: [{},{},{}]},
                {id: 4, title:"Saw",image:"https://m.media-amazon.com/images/I/61Dr1uVEjWL._AC_UF894,1000_QL80_.jpg", raiting: 4.0, runTime: 103,shows: [{},{},{}]},
];

const [movies,setMovies] = useState(initialMovies);


  return (
    <div> 
      <Dashboard movies={initialMovies}/> 
    </div>
 
  )
}

export default App
