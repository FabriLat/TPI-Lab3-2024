import { Form, Row, Col, Button } from "react-bootstrap";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEnglishTranslator from "../../custom/useEnglishTranslator";

const SignIn = ({ onRegister }) => {
  // custom hook
  const [isEnglish, setIsEnglish] = useState(false);

  const handleLanguageSwitch = () => {
    setIsEnglish(!isEnglish);
  };

  const signinTitle = useEnglishTranslator("Registrarse", isEnglish);
  const userInputText = useEnglishTranslator("Usuario", isEnglish);
  const passwordInputText = useEnglishTranslator("Contraseña", isEnglish);
  const confirmPasswordText = useEnglishTranslator(
    "Confirmar contraseña",
    isEnglish
  );
  const userInputPlaceholder = useEnglishTranslator(
    "Ingresá tu usuario",
    isEnglish
  );
  const passwordInputPlaceholder = useEnglishTranslator(
    "Ingresá tu contraseña",
    isEnglish
  );
  const confirmPasswordInputPlaceholder = useEnglishTranslator(
    "Confirmá tu contraseña",
    isEnglish
  );
  const emailInputText = useEnglishTranslator("Ingresá tu email", isEnglish);

  const navigate = useNavigate();
  // useRef para acceder al dom
  const userRef = useRef(null);
  const passRef = useRef(null);
  const secondPassRef = useRef(null);
  const emailRef = useRef(null);

  const [errors, setErrors] = useState({
    user: false,
    password: false,
    secondPassword: false,
    email: false,
  });

  const signInHandler = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passRef.current.value;
    const secondPassword = secondPassRef.current.value;
    const email = emailRef.current.value;

    if (user.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user: true,
        password: false,
        secondPassword: false,
        email: false,
      }));
    } else if (email.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user: false,
        password: false,
        secondPassword: false,
        email: true,
      }));
    } else if (password.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user: false,
        password: true,
        secondPassword: false,
        email: false,
      }));
    } else if (secondPassword.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        user: false,
        password: false,
        secondPassword: true,
        email: false,
      }));
    } else {
      if (password === secondPassword) {
        const userRegister = {
          id: Math.random(),
          userName: user,
          email: email,
          password: password,
          boughtShows: [],
          type: "client",
        };
        onRegister(userRegister);
        navigate("/login", { replace: true });
      } else {
        alert("Las contraseñas ingresadas no coinciden, vuelva a intentarlo.");
      }
    }
  };

  return (
    <>
      <h1 className="d-flex justify-content-center mt-4">{signinTitle}</h1>
      <Form onSubmit={signInHandler}>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>{userInputText}</Form.Label>
            <Form.Control
              ref={userRef}
              className={errors.user ? "border border-danger" : ""}
              placeholder={userInputPlaceholder}
              type="text"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              ref={emailRef}
              className={errors.email ? "border border-danger" : ""}
              type="email"
              placeholder={emailInputText}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>{passwordInputText}</Form.Label>
            <Form.Control
              ref={passRef}
              className={errors.password ? "border border-danger" : ""}
              type="password"
              placeholder={passwordInputPlaceholder}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="m-4 d-flex justify-content-center">
          <Col sm="3">
            <Form.Label>{confirmPasswordText}</Form.Label>
            <Form.Control
              ref={secondPassRef}
              className={errors.secondPassword ? "border border-danger" : ""}
              type="password"
              placeholder={confirmPasswordInputPlaceholder}
            />
            <Button
              onClick={handleLanguageSwitch}
              variant="dark"
              style={{ marginTop: "10px" }}
            >
              {isEnglish ? "Change to Spanish" : "Cambiar a Inglés"}
            </Button>
            <Button
              type="submit"
              variant="dark"
              className=" mt-4 d-flex justify-content-center text-align-center align-items-center"
            >
              {signinTitle}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
};

export default SignIn;
