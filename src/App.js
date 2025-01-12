import { RouterProvider } from "react-router-dom";
import router from "./Components/Routing/routes";
import './App.css'

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

