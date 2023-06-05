import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import User from "./pages/UserPage/index.jsx";
import LogOutProvider from "./contexts/MenuContext";
import LogInProvider from "./contexts/PersistenLogInContext";

import SignUpPage from "./pages/SignUpPage/index.jsx";
import SignInPage from "./pages/SignInPage/index.jsx";
import HashtagsPage from "./pages/HashtagPage";

export default function App() {
  return (
    <BrowserRouter>
      <LogInProvider>
        <LogOutProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/hashtags/" element={<HashtagsPage />} />
            <Route path="/timeline" element={<Home />} />
          </Routes>
        </LogOutProvider>
      </LogInProvider>
    </BrowserRouter >
  );
}
