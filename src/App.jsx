import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <ToastContainer
        autoClose={5000}
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;