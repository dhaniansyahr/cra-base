import { Route } from "react-router-dom";
import Home from "../pages/home";
import LoginByGoogle from "../pages/login/google";
import LoginByPhoneNumber from "../pages/login/phone-number";

const routes = [
  {
    path: "/login/google",
    layout: "/auth",
    element: <LoginByGoogle />,
  },
  {
    path: "/login/phone-number",
    layout: "/auth",
    element: <LoginByPhoneNumber />,
  },
  {
    path: "/",
    element: <Home />,
    layout: "",
  },
];

const getRoutes = () => {
  return routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));
};

export { getRoutes };
