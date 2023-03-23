import React from "react";
import SignInForm from "components/auth/SignInForm";
import { Container } from "react-bootstrap";

const SignIn = () => {
  return (
    <Container>
      <h1 className="text-center">Sign In</h1>
      <SignInForm />
    </Container>
  );
};

export default SignIn;
