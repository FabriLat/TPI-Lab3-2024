import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate("/")
  };

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap" style={{ margin: "150px" }}>
        <h3>Lo sentimos, no pudimos encontrar la página que estás buscando. ☠️</h3>
        <h5 className="m-3">Probá chequeando la dirección URL y volvé a intentarlo.</h5>
      </div>
      <h5 className="d-flex justify-content-center text-center">❌Error 404 - Page Not Found❌</h5>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-dark"
          onClick={handleGoBack}
          style={{ marginTop: "30px" }}
        >
          Volver al inicio
        </button>
      </div>
    </>
  );
};

export default NotFound;

