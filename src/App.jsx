import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Room from "./pages/Room";
import LoginPage from "./pages/LoginPage";
import PrivateRoutes from "./components/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";
import RegisterPage from "./components/RegisterPage";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Room />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
