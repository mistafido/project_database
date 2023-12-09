import React from 'react';
//import logo from './logo.svg';
import Dashboard from './components/Dashboard';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContractorPage from './contractors/ContractorPage';
import ProjectPage from './projects/ProjectPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/projects" Component={ProjectPage} />
          <Route path="/contractors" Component={ContractorPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
