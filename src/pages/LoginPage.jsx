import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const { user, handleUserLogin } = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentails({ ...credentials, [name]: value });

    console.log(credentials);
  };

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => handleUserLogin(e, credentials)}>
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
              value={credentials.password}
              type="password"
              name="password"
              required
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <input
              type="submit"
              value={"Login"}
              className="btn btn--lg btn--main"
            />
          </div>
        </form>
        <p>
          Don't have an account? Register <Link to={"/register"}>Here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
