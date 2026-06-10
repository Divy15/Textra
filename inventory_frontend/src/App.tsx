import { Navbar } from "./Components/CommonComponent/Navbar"
import Onboarding from "./Pages/Onboarding.page"
import { AuthProvider, useAuth } from "./Context/AuthContext"
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "./Pages/Login.page";
import { ProductsPage } from "./Pages/Products.page";
import { LoaderProvider } from "./Context/LoaderContext";

// A clean route-guard to prevent accessing pages while logged out
const ProtectedRoute = ({ children }: { children }) => {
  const { isLoggedIn } = useAuth();
  
  // If not logged in, bounce them strictly back to the login path
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

// A route-guard to prevent logged-in users from seeing the login screen again
const PublicRoute = ({ children }: { children }) => {
  const { isLoggedIn } = useAuth();
  
  // If already logged in, fast-forward them straight to the dashboard board
  return !isLoggedIn ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider> 
        <LoaderProvider>
        {/* Global Toast configuration setup */}
        <Toaster 
          position="top-right" 
          toastOptions={{
            duration: 4000,
            style: {
              background: '#FDFBF7', // off-white
              color: '#6B1D2F',     // burgundy
              border: '1px solid rgba(193, 154, 107, 0.2)', // camel brown border tint
            }
          }} 
        />
        
        {/* Navbar stays permanent on top, able to read router hooks inside AuthProvider */}
        <Navbar />

        <Routes>
          {/* Default entry root redirects to login if unauthenticated */}
          <Route path="/" element={<Navigate to="/" replace />} />

          {/* Public Access Paths */}
          <Route 
            path="/login" 
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            } 
          />

          {/* Secure Protected Dashboard Paths */}
          <Route 
            path="/onroll-board" 
            element={
              <PublicRoute>
                <Onboarding />
              </PublicRoute>
            } 
          />

          {/* Secure Protected Products Paths */}
          <Route 
            path="/product" 
            element={
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
            } 
          />


          {/* Catch-all Wildcard fallback route redirecting back to root */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </LoaderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
