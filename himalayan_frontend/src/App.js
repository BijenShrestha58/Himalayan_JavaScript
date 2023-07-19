import './App.scss';
import  HomeLayout from "./layouts/HomeLayout";
import { Route, Routes } from "react-router";
import {Nav} from "./components/common/nav";

const App = () => {
  const routes = [
    { path: "", element: <HomeLayout /> },
    { path: "home", element: <HomeLayout /> },
  ];
  return (
    <>
      <Nav/>
      <Routes>
        {routes.map((v, key) => (
          <Route path={v.path} element={v.element} key={key}></Route>
        ))}
      </Routes>
    </>
  );
};

export default App;
