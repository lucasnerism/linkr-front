import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles.js/GlobalStyle";
import Home from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}