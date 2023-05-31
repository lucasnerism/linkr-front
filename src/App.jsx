import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogOutProvider from "./contexts/MenuContext";
import LogInProvider from "./contexts/PersistenLogInContext";

export default function App() {
  return (
    <BrowserRouter>
      <LogInProvider>
        <LogOutProvider>
          <Routes>
          </Routes>
        </LogOutProvider>
      </LogInProvider>
    </BrowserRouter>
  );
}