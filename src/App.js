import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mall from "./pages/Mall";
import Grocery from "./pages/Grocery";
import Showroom from "./pages/Showroom";
import DoctorOffice from "./pages/DoctorOffice";
import Hospital from "./pages/Hospital";
import Layout from "./pages/Layout";
import Stock from "./pages/Stock";
import HumanResources from "./pages/HumanResources";
import GroceryStock from "./pages/GroceryStock";
import PersonalBanking from "./pages/PersonalBanking";
import BankingRoles from "./pages/BankingRoles";
import FirstTech from "./pages/FirstTech";
import MusketeersMall from "./pages/MusketeersMall";
import StickballBank from "./pages/StickballBank";
import FidelityInvestments from './pages/FidelityInvestments'
import StickballCompany from "./pages/StickballCompany";
import StickballApartments from "./pages/StickballApartments";
import SmartShopMall from './pages/SmartShopMall'
import PolygonOffice from './pages/PolygonOffice'
import School from './pages/School'
import OtherCareers from "./pages/OtherCareers";
import Business from "./pages/Business";
import Jobs from "./pages/Jobs";
import Investing from "./pages/Investing";
import JobPerformance from "./pages/JobPerformance";
import BrooklineBank from "./pages/brookline-bank";
import PassumpsicBank from "./pages/passumpsic-bank";
import VincentsThrift from "./pages/vincents-thrift";
import FastFood from "./pages/fast-food";
import Matterport from "./pages/matter-port";
import SaveMart from "./pages/save-mart";
import DirectToWorkProgram from "./pages/DirectToWorkProgram";
import HealthyRelationship from "./pages/HealthyRelationship";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="financial-advisor" element={<Stock />} />
        <Route path="/" element={<Layout />} />
        <Route path="showroom" element={<Showroom />} />
        <Route path="mall" element={<Mall />} />
        <Route path="grocery-store" element={<Grocery />} />
        <Route path="doctor-office" element={<DoctorOffice />} />
        <Route path="hospital" element={<Hospital />} />
        <Route path="human-resources" element={<HumanResources />} />
        <Route path="grocery-stock" element={<GroceryStock />} />
        <Route path="personal-banking" element={<PersonalBanking />} />
        <Route path="banking-roles" element={<BankingRoles />} />
        <Route path="first-tech" element={<FirstTech />} />
        <Route path="musketeers-mall" element={<MusketeersMall />} />
        <Route path="stickball-bank" element={<StickballBank />} />
        <Route path="fidelity-investments" element={<FidelityInvestments />} />
        <Route path="stickball-company" element={<StickballCompany />} />
        <Route path="stickball-apartments" element={<StickballApartments />} />
        <Route path="smart-shop-mall" element={<SmartShopMall />} />
        <Route path="polygon-office" element={<PolygonOffice />} />
        <Route path="school" element={<School />} />
        <Route path="careers" element={<OtherCareers />} />
        <Route path="business" element={<Business />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="investing" element={<Investing />} />
        <Route path="job-performance" element={<JobPerformance />} />
        <Route path="brookline-bank" element={<BrooklineBank />} />
        <Route path="passumpsic-bank" element={<PassumpsicBank />} />
        <Route path="vincents-thrift" element={<VincentsThrift />} />
        <Route path="fast-food" element={<FastFood />} />
        <Route path="matter-port" element={<Matterport />} />
        <Route path="save-mart" element={<SaveMart />} />
        <Route path="direct-to-work-program" element={<DirectToWorkProgram />} />
        <Route path="healthy-relationship" element={<HealthyRelationship />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
