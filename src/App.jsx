import AppRoutes from "./router/AppRoutes.jsx";
import AuthRoutes from "./router/AuthRoutes.jsx";
function App() {
  //TODO - How to Seprate the public and protected routes
  // const isAuthenticated = !!localStorage.getItem("accessToken");

  return <>
  <AppRoutes/>
  </>;
}

export default App;
