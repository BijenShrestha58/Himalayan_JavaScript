import './App.scss';


import ForumCard from './components/partials/card';
import  {Home} from "./pages/home";
import { Route, Routes } from "react-router";
import Layout from './pages/layout';
import { AnnouncementPage } from './pages/announcements';
import Forum from './pages/forums';
import AdminPanel from './components/adminPanel/admin';
const App = () => {
  const routes = [
    { path: "", element: <Home/> },
    { path: "home", element: <Home/> },
     { path: "forums", element: <Forum /> },
    { path: "announcements", element: <AnnouncementPage /> },
    { path: "admin", element: <AdminPanel/> },
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
