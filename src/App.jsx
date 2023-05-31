import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./pages/UserPage/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}