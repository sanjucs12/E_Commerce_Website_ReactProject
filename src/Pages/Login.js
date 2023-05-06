import React, { useRef, useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import CartContext from "../Store/cart-context";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const authCtx = useContext(CartContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //console.log(enteredEmail, enteredPassword);

    setIsLoading(true); //loading state
    let url;
    if (isLogin) {
      //LOGIN//
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDtrfX5Pk9dmy1eggVn9T7iGiaSNVn1aUw";
    } else {
      //SIGN UP//
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDtrfX5Pk9dmy1eggVn9T7iGiaSNVn1aUw";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false); //loading state
        if (res.ok) {
          if (!isLogin) {
            alert("Account created successfully. Please LogIn");
          }
          return res.json();
        } else {
          return res.json().then((data) => {
            //Show error modal
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
            //console.log(data)
          });
        }
      })
      .then((data) => {
        console.log(data);
        authCtx.login(data.idToken, data.email);
        navigate("/Store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Form
        className="p-4 rounded shadow"
        style={{ maxWidth: "400px" }}
        onSubmit={submitHandler}
      >
        {isLogin ? (
          <h3 className="text-center mb-4">Login</h3>
        ) : (
          <h3 className="text-center mb-4">SignUp</h3>
        )}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailInputRef}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            minLength="6"
            ref={passwordInputRef}
            required
          />
        </Form.Group>
        {!isLoading && (
          <Button variant="primary" type="submit" className="w-100 mt-3">
            {isLogin ? "Login" : "Create Account"}
          </Button>
        )}
        <Button
          type="button"
          variant="link"
          className="btn-unstyled"
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
