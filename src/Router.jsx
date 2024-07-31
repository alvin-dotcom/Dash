import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Dash from './components/Dash'

import Department from './pages/Department'
import Faculty from './pages/Faculty'
import Finance from './pages/Finance'
import Higher from './pages/Higher'
import Hostel from './pages/Hostel'
import HR from './pages/HumanResources'
import Infra from './pages/Infrastruture'
import IT from './pages/IT'
import NonAcadmic from './pages/NonAcademic'
import Placement from './pages/Placement'
import Research from './pages/Research';
import StudentMetrics from './pages/StudentMetrics';

const Layout = () => (
  <div className="flex h-screen overflow-auto">
  <Sidebar />
    <div className="flex-1 overflow-auto">
      <Outlet />
    </div>
  </div>
  );
  
const Router = () => {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Hero />} />
          <Route element={<Layout />}>
            <Route path="/research" element={<Research/>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
};
  
export default Router;