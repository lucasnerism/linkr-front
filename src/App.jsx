import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import User from "./pages/UserPage/index.jsx";
import LogOutProvider from "./contexts/MenuContext";
import LogInProvider from "./contexts/PersistenLogInContext";


export default function App() {
  return (
    <BrowserRouter>
      <LogInProvider>
        <LogOutProvider>
          <Routes>
            <Route />
            <Route path="/user/:id" element={<User />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </LogOutProvider>
      </LogInProvider>
    </BrowserRouter >
  );
}
