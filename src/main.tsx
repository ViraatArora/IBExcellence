<<<<<<< Updated upstream

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        {/* Basic home route */}
        <Route path="/" element={<div>Welcome to Math Ace Tutoring!</div>} />
        {/* TODO: add your real routes/components here */}
      </Routes>
    </div>
  );
}
>>>>>>> Stashed changes

createRoot(document.getElementById("root")!).render(<App />);
