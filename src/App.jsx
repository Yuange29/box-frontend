import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import FogotPassword from "./pages/FogotPassword.jsx";
import Loading from "./pages/Loading.jsx";
import Categories from "./pages/Categories.jsx";
import Profile from "./pages/Profile.jsx";

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";
import { DataProvider } from "./contexts/DataContext.jsx";
import { ToastProvider } from "./contexts/ToastContext.jsx";
import { ConfirmProvider } from "./contexts/ConfirmContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

import LoadingScreen from "./components/ui/LoadingScreen";
import Fee from "./pages/Fee.jsx";

function AppContent() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<FogotPassword />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/fee" element={<Fee />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <LoadingProvider>
          <ToastProvider>
            <ConfirmProvider>
              <ThemeProvider>
                <AuthProvider>
                  <DataProvider>
                    <AppContent />
                    <LoadingScreen />
                  </DataProvider>
                </AuthProvider>
              </ThemeProvider>
            </ConfirmProvider>
          </ToastProvider>
        </LoadingProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
