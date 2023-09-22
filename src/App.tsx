import { Routes, Route} from 'react-router-dom'
import { CreditCardForm } from './pages/CreditCardForm';
import { ToastContainer } from 'react-toastify';

function App() {
return (
    <>
    <div>
    <ToastContainer/>
      <Routes>
        <Route path="" element={<CreditCardForm />} />
      </Routes>
    </div>

    </>
  );
}

export default App;



