import{BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgetPassword from "./pages/forgetPassword";
import Home from "./pages/home";
import CreateInvoice from "./pages/createInvoice";
import InvoiceSent from "./pages/invoiceSent";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create-invoice" element={<CreateInvoice />} />
      <Route path="/invoice-sent" element={<InvoiceSent />} />
    </Routes>
    </>
  );
}

export default App;