import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import FogotPassword from "./pages/FogotPassword.jsx";
import Loading from "./pages/Loading.jsx";
import Categories from "./pages/Categories.jsx";

import { AuthProvider, AuthContext } from "./Contexts/AuthContext";
import LoadingScreen from "./components/ui/LoadingScreen";

function AppContent() {
  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && window.location.pathname === "/loading") {
      navigate("/");
    }
  }, [loading, navigate]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<FogotPassword />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
        <LoadingScreen />
      </AuthProvider>
    </>
  );
}

export default App;
