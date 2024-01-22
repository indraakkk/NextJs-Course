import { Outlet } from 'react-router-dom';
import MainHeader from '../components/main-header';

export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
