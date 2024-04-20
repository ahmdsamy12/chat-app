/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUserOnLoad();
  }, []);

  const getUserOnLoad = async () => {
    try {
      const accountInfo = await account.get();
      setUser(accountInfo);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleUserLogin = async (e, credentails) => {
    e.preventDefault();

    try {
      const response = await account.createEmailPasswordSession(
        credentails.email,
        credentails.password
      );

      const accountInfo = await account.get();
      setUser(accountInfo);
      navigate("/");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const handleUserLogout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const handleUserRegister = async (e, credentails) => {
    e.preventDefault();

    if (credentails.password1 !== credentails.password2) {
      alert("Password do not match!");
      return;
    }

    try {
      let response = await account.create(
        ID.unique(),
        credentails.email,
        credentails.password1,
        credentails.name
      );
      await account.createEmailPasswordSession(
        credentails.email,
        credentails.password1
      );
      const accountInfo = await account.get();
      setUser(accountInfo);
      navigate("/login");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const contextData = {
    user,
    handleUserLogin,
    handleUserLogout,
    handleUserRegister,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
