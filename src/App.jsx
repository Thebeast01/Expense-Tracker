import Navbar from "./components/Navbar";
import About from './components/About';

import ExpenseBox from "./components/ExpenseBox";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (<>    <div className="overflow-hidden h-screen">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ExpenseBox />} />

        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  </div>
  </>

  );
}
export default App;
