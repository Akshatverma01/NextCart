import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = React.lazy(() => import("./pages/HomePage.jsx"));
const CreatePage = React.lazy(() => import("./pages/CreatePage.jsx"));
const Navbar = React.lazy(() => import("./components/Navbar.jsx"));
const AboutPage = React.lazy(() => import("./pages/About.jsx"));
const ContactPage = React.lazy(() => import("./pages/Contact.jsx"));
const Footer = React.lazy(() => import("./components/Footer.jsx"));

import { Box } from "@chakra-ui/react";
function App() {
  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
    >
      <Navbar />
      <Box flex="1"> 
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
