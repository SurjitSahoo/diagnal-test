import Error404 from 'pages/error/404';
import Home from 'pages/home';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
}
