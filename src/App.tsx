import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { ROUTES, type IRoute } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ path, component }: IRoute) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
