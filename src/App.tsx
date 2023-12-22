import { BrowserRouter } from "react-router-dom";
import RockRoutes from "./routes/RockRoute";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RockRoutes />
    </BrowserRouter>
  );
};

export default App;
