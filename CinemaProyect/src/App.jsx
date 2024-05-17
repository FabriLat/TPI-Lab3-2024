import { useState } from 'react'
import Dashboard from './components/dashboard/Dashboard';


function App() {

  //Arreglo inciial de funciones y peliculas (falta llenar los datos vacios)
  //Una funcion tiene 100 asientos, cuando llega a 0 available cambia a false.
  const shows = [{id:1,movie:"shrek" ,time:"19:30",date:"18/5",seats:100,available: true},];
  
  //arreglo de tickets vacío, se empiezan a generar al sacar una entrada.
  const movieTicket = [{price: 0,movie: "movie",show:"show",client: "client"}]

  const clients = [{username: "", email: "", password: "", showsBuyed: "", tickets: "tickets", type:"client"}]

  //Una pelicula puede tener varias funciones. 
  const movies = [{id:1, title:"Shrek" ,rating:5.0, runTime:89,shows:shows[0]},
                {id:2,title:"Openheimmer",rating: 5.0, runTime: 180, shows: shows[0]},
                {id:3, title:"Hostel",rating: 4.0, runTime: 94, shows:shows[0]},
                {id: 4, title:"Saw", raiting: 4.0, runTime: 103,shows:shows [0]},
];


  return (
    <div> 
      <Dashboard movies={movies} />
      <p>hola</p>
    </div>
 
  )
}

export default App
