import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "swiper/css/bundle";

function App() {
  return (
    <div className=''>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
