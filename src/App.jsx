
import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import PresidentDesk from "./components/Management/PresidentDesk";
import VicePresident from "./components/Management/VicePresident";
import GeneralSecretary from "./components/Management/GeneralSecretary";
import BoardMembers from "./components/Management/BoardMembers";
import BrahmaValleyOfEducation from "./components/About-us/BrahmaValleyOfEducation";
import PrincipalDesk from "./components/About-Us/PrincipalDesk";
import MissionVision from "./components/About-Us/MissionVision";
import SalientFeatures from "./components/About-us/SalientFeatures";
import NCTE from "./components/About-us/NCTE";
import Library from "./components/Facilities/Library";
import GymnasiumSport from "./components/Facilities/GymnasiumSport";
import Transport from "./components/Facilities/Transport";
import Contact from "./pages/Contact";
import ExamTimeTable from "./components/Examination/ExamTimeTable";
import Result from "./components/Examination/Result";
import AcademicCalender from "./components/Examination/AcademicCalender";
import Achievement from "./components/Examination/Achievement";
import NaacDocuments from "./components/More/NaacDocuments";
import Scholarship from "./components/Admission/Scholarship";
import RequiredDocuments from "./components/Admission/RequiredDocuments";
import IQAC from "./components/Governance/IQAC";
import RTI from "./components/Governance/RTI";
import EOC from "./components/Governance/EOC";
import CollegeDevelopmentCommittee from "./components/Governance/CollegeDevelopmentCommittee";
import GrievanceRedressalCell from "./components/Governance/GrievanceRedressalCell";
import DivyangCell from "./components/Governance/DivyangCell";
import Vishakha from "./components/GOVERNANCE/Vishakha";
import SCST from "./components/GOVERNANCE/SCST";
import PlacementCell from "./components/GOVERNANCE/PlacementCell";
import StudentCouncil from "./components/GOVERNANCE/StudentCouncil";
import AntiRagging from "./components/GOVERNANCE/AntiRagging";







function App() {

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/president-desk" element={<PresidentDesk />} />
          <Route path="/vice-president-desk" element={<VicePresident />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/general-secretary" element={<GeneralSecretary />} />
          <Route path="/brahma-valley-of-education" element={<BrahmaValleyOfEducation />} />
          <Route path="/principal-desk" element={<PrincipalDesk />} />
          <Route path="/vision-mission" element={<MissionVision />} />
          <Route path="/salient-features" element={<SalientFeatures />} />
          <Route path="/ncte" element={<NCTE />} />
          <Route path="/library" element={<Library />} />
          <Route path="/gymnasium-sport" element={<GymnasiumSport />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exam-timetable" element={<ExamTimeTable />} />
          <Route path="/result" element={<Result />} />
          <Route path="/academic-calendar" element={<AcademicCalender />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/naac-documents" element={<NaacDocuments />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/required-documents" element={<RequiredDocuments />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/rti" element={<RTI />} />
          <Route path="/equal-opportunity-cell" element={<EOC />} />
          <Route path="/college-development-committee" element={<CollegeDevelopmentCommittee />} />
          <Route path="/grievance-redressal-cell" element={<GrievanceRedressalCell />} />
          <Route path="/divyang-cell" element={<DivyangCell />} />
          <Route path="/vishakha-cell" element={<Vishakha />} />
          <Route path="/scst-cell" element={<SCST />} />
          <Route path="/placement-cell" element={<PlacementCell />} />
          <Route path="/student-council" element={<StudentCouncil />} />
          <Route path="/anti-ragging-cell" element={<AntiRagging />} />



        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
