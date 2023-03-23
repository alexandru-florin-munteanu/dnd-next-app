import React from "react";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import styles from "styles/SignIn.module.scss";

const SignIn = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/api/auth/login");
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} className={styles.signInContainer}>
          <h1 className="text-center">Welcome</h1>
          <p className="text-center">
            Click the button below to sign in or sign up using Auth0.
          </p>
          <div className="text-center">
            <Button variant="primary" onClick={handleSignIn} size="lg">
              Sign In / Sign Up
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
