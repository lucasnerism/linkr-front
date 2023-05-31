import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogOutProvider from "./contexts/MenuContext";
import LogInProvider from "./contexts/PersistenLogInContext";
import User from "./pages/UserPage/index.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <LogInProvider>
        <LogOutProvider>
          <Routes>
            <Route />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </LogOutProvider>
      </LogInProvider>      
    </BrowserRouter>
  );
}
