import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/api/auth/login");
  };

  return (
    <div>
      <p>Click the button below to sign up using Auth0.</p>
      <Button variant="primary" onClick={handleSignup}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignUpForm;
