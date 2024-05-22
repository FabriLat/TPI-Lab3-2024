const Dashboard = ({ movies, shows }) => {
  const mappedMovies = movies.map((movie) => (
    <div className="d-flex flex-row mb-3 " key={movie.id}>
      <div className="d-flex flex-column align-items-center">
        <h2>Titulo: {movie.title}</h2>
        <br />
        <img src={movie.image} width="200" alt="" />

        <p> Rating: {movie.rating}</p>

        <br />
        <p>Duracion: {movie.runTime}</p>

        <br />
      </div>
    </div>
  ));
  return (
    <>
      <nav className="">
        <ul className="nav justify-content-between">
          <li className="m-2">
            <a className="navbar-brand" href="">
              <img
                src="https://ih1.redbubble.net/image.4839257361.1382/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                width="70"
                height="70"
                alt=""
              />
            </a>
          </li>
          <li className="m-2">
            <a className="nav-link link-dark" href="">
              Titulo
            </a>
          </li>
          <li className="m-2">
            <a className="nav-link link-dark" href="">
              Ingresar
            </a>
          </li>
          <li className="m-2">
            <a className="nav-link link-dark" href="">
              Registrarse
            </a>
          </li>
        </ul>
      </nav>

      <h1 className="d-flex justify-content-center">BIENVENIDO</h1>

      <div className="d-flex justify-content-around mt-5">{mappedMovies}</div>
    </>
  );
};
export default Dashboard;
