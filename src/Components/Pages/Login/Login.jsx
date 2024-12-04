import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Layout/Loader/Loader.jsx";

function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("credentials", JSON.stringify(formValues));
    setIsLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 5000);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInput}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInput}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
