import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoutes/ProtectedRoute";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import Forgotpassword from "./components/Forgotpassword";
import UserProtectedRoute from "./components/protectedRoutes/UserProtectedRoute";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <UserProtectedRoute>
                <Login />
              </UserProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <UserProtectedRoute>
                {" "}
                <Signup />{" "}
              </UserProtectedRoute>
            }
          />
          <Route
            path="/resetpassword"
            element={
              <UserProtectedRoute>
                <Forgotpassword />
              </UserProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
