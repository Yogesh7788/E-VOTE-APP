import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Auth/HomePage";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import VotePage from './pages/Auth/VotePage';
import AdminPage from './pages/Auth/AdminPage';
import VoteCount from "./pages/Auth/VoteCount";
function App() {
  return (
    <>
      <Routes>
      <Route path="/votecount" element={<VoteCount />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
       
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}
export default App;