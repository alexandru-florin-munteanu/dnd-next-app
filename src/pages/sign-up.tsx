import React from "react";
import SignupForm from "components/auth/SignUpForm";
import { Container } from "react-bootstrap";

const SignUp = () => {
  return (
    <Container>
      <h1 className="text-center">Sign Up</h1>
      <SignupForm />
    </Container>
  );
};

export default SignUp;
