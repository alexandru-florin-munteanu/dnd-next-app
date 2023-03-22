import React from "react";
import classnames from "classnames";
import NavBar from "components/NavBar";
// Replace with the path to your logo image file

const logoSrc = "https://via.placeholder.com/150x50";

const App: React.FunctionComponent = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  // Replace with your user object or state
  const user = {
    name: "John Doe",
  };

  const headerClasses = classnames("justify-content-between p-1");
  const navClasses = classnames(
    "d-none d-lg-flex header-hav align-items-center",
    {
      "flex-grow-1 justify-content-end me-2": true,
    }
  );

  return (
    <>
      <NavBar />
      <main>TBD</main>
    </>
  );
};

export default App;
