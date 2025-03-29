import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Chat from "./Pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
