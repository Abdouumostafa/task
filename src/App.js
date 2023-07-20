import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComplaintsType from "./pages/ComplaintsType";
import ControlComplaints from "./pages/ControlComplaints";

function App() {
  return (
    <main className="h-[100vh]">
      <Router>
        <Routes>
          <Route exact path="/" element={<ComplaintsType />} />
          <Route exact path="/control" element={<ControlComplaints />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
