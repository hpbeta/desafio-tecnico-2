import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Repositories } from "../pages/repositories";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/repositories/:userName/repos"
          element={<Repositories />}
        />
      </Routes>
    </BrowserRouter>
  );
}
