import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
}

export default App;
