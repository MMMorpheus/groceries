import { Outlet } from 'react-router-dom';

import { Header } from 'components';
import './sass/main.scss';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
