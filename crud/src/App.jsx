import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* READ Route */}
        <Route path="/" element={<UserList />} />

        {/* CREATE Route */}
        <Route path="/add" element={<UserForm />} />

        {/* UPDATE Route (Uses dynamic URL parameter :id) */}
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </div>
  );
}