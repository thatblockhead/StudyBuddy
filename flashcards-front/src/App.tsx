import React from "react"
import { Route, Routes } from 'react-router-dom'
import Create from "./routes/Create";
import Home  from './routes/Home'
import Play from "./routes/Play";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="play" element={<Play />} />
    </Routes>
  );
}

export default App;
