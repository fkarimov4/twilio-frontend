import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
