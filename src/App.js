import { RouterProvider } from "react-router-dom";
import router from "./Components/Routing/routes";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

