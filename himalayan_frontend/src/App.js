import './App.scss';

import ForumCard from './components/partials/card';
import  {Home} from "./pages/home";
import { Route, Routes } from "react-router";
import {Nav} from "./components/common/nav";

const App = () => {
  const routes = [
    { path: "", element: <Home /> },
    { path: "home", element: <Home/> },
    // { path: "forums", element: <ForumLayout /> },
    // { path: "announcements", element: <AnnouncementLayout /> },
  ];
  return (
    <>
      <Routes>
        {routes.map((v, key) => (
          <Route path={v.path} element={v.element} key={key}></Route>
        ))}
      </Routes>
    </>
  );
};

export default App;
