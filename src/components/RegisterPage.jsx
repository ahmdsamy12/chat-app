import { useState } from "react";
import { useAuth } from "../utils/AuthContext";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [credentials, setCredentails] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { handleUserRegister } = useAuth();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentails({ ...credentials, [name]: value });

    console.log(credentials);
  };

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => handleUserRegister(e, credentials)}>
          <div className="field--wrapper">
            <label>Name:</label>
            <input
              value={credentials.name}
              type="text"
              name="name"
              required
              placeholder="Enter your Name..."
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <label>Email:</label>
            <input
              value={credentials.email}
              type="email"
              name="email"
              required
              placeholder="Enter your Email..."
              onChange={handleInputChange}
            />
          </div>
          <div className="field--wrapper">
            <label>Password:</label>
            <input
              value={credentials.password1}
              type="password"
              name="password1"
              required
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <label>Confirm Password:</label>
            <input
              value={credentials.password2}
              type="password"
              name="password2"
              required
              placeholder="Confirm Your Password"
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <input
              type="submit"
              value={"Register"}
              className="btn btn--lg btn--main"
            />
          </div>
        </form>
        <p>
          Already have an account? Login <Link to={"/login"}>Here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
