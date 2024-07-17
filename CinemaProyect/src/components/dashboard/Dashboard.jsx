import { useContext } from "react";
import { Carousel, Container } from "react-bootstrap";
import { UserContext } from "../../services/authentication/user.context";
import AdminNavBar from "../adminNavBar/AdminNavBar";
import ClientNavBar from "../clientNavBar/ClientNavBar";
import NavBar from "../navBar/NavBar";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user && user.type === "client" ? (
        <ClientNavBar />
      ) : user && user.type === "admin" ? (
        <AdminNavBar />
      ) : (
        <NavBar />
      )}
      <Container className="text-center mt-5">
        <h1 className="mb-4">Bienvenido a Dragon Cinema</h1>
        <h4 className="mb-4">Películas destacadas 📽️</h4>
        <Carousel className="mb-4" style={{ borderRadius: "50px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://images7.alphacoders.com/131/1314905.jpeg"
              alt="First slide"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages6.alphacoders.com%2F447%2Fthumb-1920-447181.jpg&f=1&nofb=1&ipt=8c2c8a3058c3b737129e8b7d794e91c504d426dc176d3e20b38b023e49796b82&ipo=images"
              alt="Second slide"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.alphacoders.com%2F550%2F550911.jpg&f=1&nofb=1&ipt=62062f68ecb44b516f2a3f0d19fcae97ad250f33a6c2a0ef5cc9c331ed32fed9&ipo=images"
              alt="Third slide"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "50px",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Dashboard;
