import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Chat from "./Pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
