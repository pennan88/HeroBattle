import { Navigations } from "./components/Navigations";
import { Routes } from "./routes/Routes";
import "./styles/app.css";

function App() {
  return (
    <div className="appWrapper">
      <Routes>
        <Navigations />
      </Routes>
    </div>
  );
}

export default App;
