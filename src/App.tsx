import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import Navbar from "./components/Navbar"
import ExerciseDetail from "./routes/ExerciseDetail"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
    </div>
  )
}

export default App