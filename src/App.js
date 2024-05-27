import React from 'react';
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import DropdownForm from './DropdownForm';
import DisplayPage from './DisplayPage';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      </Routes>
      <div>
        <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="/form" element={<DropdownForm />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;


