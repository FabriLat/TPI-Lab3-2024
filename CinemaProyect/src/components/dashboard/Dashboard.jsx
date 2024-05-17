const Dashboard = ({movies, shows}) => {


    const mappedMovies = movies.map((movie) => (
        <h2 key={movie.id}>Titulo: {movie.title}<br/>
        Rating: {movie.rating}<br/> 
        Duracion: {movie.runTime}<br/>
    
        <hr />
        </h2>
    ))
    return(
        <div>
            {mappedMovies}
        </div>

    )
    }   
export default Dashboard;