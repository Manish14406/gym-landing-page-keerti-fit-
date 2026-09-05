import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navigation/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

// Code splitting subpages to reduce initial bundle weight
const About = lazy(() => import("./Pages/About"));
const Schedule = lazy(() => import("./Pages/Schedule"));
const Contact = lazy(() => import("./Pages/Contact"));
const Pricing = lazy(() => import("./Pages/Pricing"));
const Classes = lazy(() => import("./Pages/Classes"));

function RouteLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-red border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <NavBar />
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="classes" element={<Classes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollToTop />
    </ErrorBoundary>
  );
}

export default App;
