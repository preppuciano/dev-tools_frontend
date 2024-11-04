import { Outlet } from 'react-router-dom';
import Footer from '../../components/AppLayout/Footer';
import Header from '../../components/AppLayout/Header';
import Sidebar from '../../components/AppLayout/Sidebar';
import './AppLayout.scss';


export default function AppLayout() {
  return (
    <>
      <Header />
      <div className='app-layout'>
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}