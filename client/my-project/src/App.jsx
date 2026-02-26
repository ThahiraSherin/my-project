import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarInsurance from "./pages/CarInsurance";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarPlans from "./pages/CarPlans";
import CarEntry from "./pages/carEntry";
import KycPage from "./pages/KycPage";
import InsuredDetails from "./pages/InsuredDetails";
import RegistrationDetails from "./pages/RegistrationDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/car-insurance" element={<CarEntry />} />
        <Route path="/car-insurance/details" element={<CarInsurance />} />
        <Route path="/car-insurance/plans" element={<CarPlans />} />
        <Route path='/kyc' element={<KycPage />} />
        <Route path="/insured-details" element={<InsuredDetails />} />
        <Route path="/registration-details" element={<RegistrationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;