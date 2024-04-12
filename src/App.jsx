import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Tittle from './Components/Tittle/Tittle';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <div className="container" style={{ margin: 0, padding: 0 }}>
        <Tittle subTittle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About />
        <Tittle subTittle="Gallery" title="Campus Photos" />
        <Campus />
        <Tittle subTittle="TESTIMONIALS" title="What Students Say" />
        <Testimonials />/
        <Tittle subTittle="Contact Us" title="Get In Touch" />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;




// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from './ComponentsMe/Sidebar';
// import HiredCandidates from './ComponentsMe/HiredCandidates';
// import JobApplications from './ComponentsMe/JobApplications';
// import InterviewScheduled from './ComponentsMe/InterviewScheduled';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Sidebar />
//         <div className="content">
//           <Routes>
//             <Route path="/job-applications" element={<JobApplications />} />
//             <Route path="/interview-scheduled" element={<InterviewScheduled />} />
//             <Route path="/hired-candidates" element={<HiredCandidates />} />
//             {/* Add more routes here */}
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
