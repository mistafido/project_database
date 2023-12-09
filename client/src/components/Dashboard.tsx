import React from 'react'
import styled from "styled-components";
import Nav from './Nav';
import ContractorPage from '../contractors/ContractorPage';
import { Routes, Route } from "react-router-dom";
import ProjectPage from '../projects/ProjectPage';
import EmployeePage from '../employees/EmployeePage';

const Dashboard = () => {
  const Container = styled.div`
  background: papayawhip;
  height: 100vh;
  display: flex;`
  const Aside = styled.div`
  width:20%;
  padding:1em;
  height: 95vh;
  background-color: teal;
  color:white;
  display: column;`
  const Main = styled.div`
  width:80%;
  position: relative;`
  return (
    <Container>
      <Aside>
        <Nav />
      </Aside>
      <Main>
        <Routes>
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contractors" element={<ContractorPage />} />
          <Route path="/employees" element={<EmployeePage />} />
        </Routes>
      </Main>
    </Container>
  );
}

export default Dashboard;