import { Toaster } from "react-hot-toast";
import AppLayout from "./pages/AppLayout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Experience from "./ui/Experience";
import Dashboard from "./pages/Dashboard";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<Dashboard />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
