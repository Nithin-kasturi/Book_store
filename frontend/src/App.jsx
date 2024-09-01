import { Toaster } from "react-hot-toast";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import { Courses } from "./courses/Courses";
import { Home } from "./home/Home";
import  { Navigate, Route, Routes } from 'react-router-dom'
function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser?<Courses/>:<Navigate to='/signup'/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
      </Routes>
      <Toaster/>
    </div>
    
  );
}

export default App;