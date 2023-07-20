import './App.scss';
import  {Home} from "./pages/home";
import { Route, Routes } from "react-router";
import Layout from './pages/layout';
import { AnnouncementPage } from './pages/announcements';
const App = () => {
  const routes = [
    { path: "", element: <Home/> },
    { path: "home", element: <Home/> },
    // { path: "forums", element: <ForumLayout /> },
    { path: "announcements", element: <AnnouncementPage /> },
  ];
  return (
    <>
    <Layout>
      <Routes>
          {routes.map((v, key) => (
          <Route path={v.path} element={v.element} key={key}></Route>
        ))}      
      </Routes>
    </Layout>
    </>
  );
};

export default App;
