import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

const SignInForm = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/api/auth/login");
  };

  return (
    <div>
      <p>Click the button below to sign in using Auth0.</p>
      <Button variant="primary" onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
};

export default SignInForm;
