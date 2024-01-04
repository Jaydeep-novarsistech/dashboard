// import React, { useState } from "react";
// import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
// import Chart from "react-apexcharts";
// import HomeIcon from "@mui/icons-material/Home";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";
// import InfoIcon from "@mui/icons-material/Info";
// import Home from "./components/Home/Home";

// function App() {
//   const [showText, setShowText] = useState(true);
//   const [state, setState] = useState({
//     options: {
//       // colors: ['#546E7A', '#E91E63'],
//       chart: {
//         id: "basic-bar",

//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//       },
//     },
//     series: [
//       {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
//       },
//       {
//         name: "series-2",
//         data: [3, 60, 35, 80, 49, 70, 20, 81, 100],
//       },
//     ],
//   });

//   const handleButtonClick = () => {
//     setShowText(!showText);
//   };

//   const sidebarStyle = {
//     backgroundColor: "#343a40",
//     color: "white",
//     padding: "20px",
//     height: "fit-content",
//     transition: "width 0.5s, padding-right 0.5s",
//     width: showText ? "200px" : "50px",
//     paddingRight: showText ? "20px" : "0",

//   };

//   const buttonStyle = {
//     marginTop: "auto",
//     width: "100%",
//     padding: "10px",
//   };

//   return (
//     <div>
//       <Navbar bg="dark" variant="dark">
//         <Navbar.Brand href="/">
//           <img
//             src="https://demo.dashboardmarket.com/hexadash-demo/img/logo_dark.png"
//             alt="Logo"
//             style={{ maxHeight: "40px" }}
//           />
//         </Navbar.Brand>
//         <Nav className="mr-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#about">About</Nav.Link>
//           <Nav.Link href="#services">Services</Nav.Link>
//           <Nav.Link href="#contact">Contact</Nav.Link>
//         </Nav>
//       </Navbar>

//       <Container fluid>
//         <Row style={{ height: "95vh" }}>
//           <Col style={sidebarStyle}>
//             <h2>Dashboard</h2>
//             <Nav defaultActiveKey="#home" className="flex-column">
//               <Nav.Link href="#home">
//                 <HomeIcon /> {showText && "Home"}
//               </Nav.Link>
//               <Nav.Link href="#about">
//                 <InfoIcon /> {showText && "About"}
//               </Nav.Link>
//               <Nav.Link href="#services">
//                 <ManageAccountsIcon /> {showText && "Services"}
//               </Nav.Link>
//               <Nav.Link href="#contact">
//                 <AddIcCallIcon /> {showText && "Contact"}
//               </Nav.Link>
//               <Nav.Link href="#home">
//                 <HomeIcon /> {showText && "Home"}
//               </Nav.Link>
//               <Nav.Link href="#about">
//                 <InfoIcon /> {showText && "About"}
//               </Nav.Link>
//               <Nav.Link href="#services">
//                 <ManageAccountsIcon /> {showText && "Services"}
//               </Nav.Link>
//               <Nav.Link href="#contact">
//                 <AddIcCallIcon /> {showText && "Contact"}
//               </Nav.Link>
//               <Nav.Link href="#home">
//                 <HomeIcon /> {showText && "Home"}
//               </Nav.Link>
//               <Nav.Link href="#about">
//                 <InfoIcon /> {showText && "About"}
//               </Nav.Link>
//               <Nav.Link href="#services">
//                 <ManageAccountsIcon /> {showText && "Services"}
//               </Nav.Link>
//               <Nav.Link href="#contact">
//                 <AddIcCallIcon /> {showText && "Contact"}
//               </Nav.Link>
//               <Nav.Link href="#home">
//                 <HomeIcon /> {showText && "Home"}
//               </Nav.Link>
//               <Nav.Link href="#about">
//                 <InfoIcon /> {showText && "About"}
//               </Nav.Link>

//             </Nav>
//             <button onClick={handleButtonClick} style={buttonStyle}>
//               Toggle Text
//             </button>
//           </Col>

//          <Col md={10} style={{ height: "100%", marginRight: "0px" }}>
//   <Row>
//     <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
//       <Chart options={state.options} series={state.series} type="bar" width="100%" />
//     </Col>

//     <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
//       <Chart options={state.options} series={state.series} type="line" width="100%" />
//     </Col>

//     <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
//       <Chart options={state.options} series={state.series} type="area" width="100%" />
//     </Col>

//     <Col xs={12} sm={6} lg={4} style={{ height: "300px", marginTop: "15px" }}>
//       <Chart options={state.options} series={state.series} type="radar" width="100%" />
//     </Col>

//     <Col xs={12} sm={6} lg={5} style={{ height: "300px", marginTop: "15px" }}>
//       <Chart options={state.options} series={state.series} type="scatter" width="100%" />
//     </Col>

//             </Row>
//           </Col>
//         </Row>

//       </Container>
//       {/* <div>
//         <Home/>
//       </div> */}

//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
// import Chart from "react-apexcharts";
// import HomeIcon from "@mui/icons-material/Home";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import AddIcCallIcon from "@mui/icons-material/AddIcCall";
// import InfoIcon from "@mui/icons-material/Info";
// import Home from "./components/Home/Home";
// import Header from './components/Header/Hedaer'
// function App() {
//   const [showText, setShowText] = useState(true);
//   const [state, setState] = useState({
//     options: {
//       chart: {
//         id: "basic-bar",
//       },
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//       },
//     },
//     series: [
//       {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
//       },
//       {
//         name: "series-2",
//         data: [3, 60, 35, 80, 49, 70, 20, 81, 100],
//       },
//     ],
//   });

//   const handleButtonClick = () => {
//     setShowText(!showText);
//   };

//   return (

//     <div>
//       <Header/>
//            <Container fluid>
//         <Row style={{ height: "95vh" }}>
//           <Col
//             xs={showText ? 12 : 2}
//             md={showText ? 2 : 1}
//             style={{
//               backgroundColor: "#343a40",
//               color: "white",
//               padding: "20px",
//               height: "100vh",
//               transition: "width 0.5s, padding-right 0.5s",
//               width: showText ? "200px" : "100px",
//               paddingRight: showText ? "20px" : "0",
//               position: "fixed",
//               top: 0,
//               left: 0,
//               zIndex: 999,
//             }}
//           >
//             <h2>Dashboard</h2>
//             <Nav defaultActiveKey="#home" className="flex-column">
//               <Nav.Link href="#home">
//                 <HomeIcon /> {showText && "Home"}
//               </Nav.Link>
//               <Nav.Link href="#about">
//                 <InfoIcon /> {showText && "About"}
//               </Nav.Link>
//               <Nav.Link href="#services">
//                 <ManageAccountsIcon /> {showText && "Services"}
//               </Nav.Link>
//               <Nav.Link href="#contact">
//                 <AddIcCallIcon /> {showText && "Contact"}
//               </Nav.Link>
//             </Nav>
//             <button
//               onClick={handleButtonClick}
//               style={{
//                 marginTop: "auto",
//                 width: "100%",
//                 padding: "10px",
//               }}
//             >
//               T
//             </button>
//           </Col>

//           <Col
//             xs={showText ? 12 : 10}
//             md={showText ? 10 : 11}
//             style={{
//               marginLeft: showText ? "200px" : "100px",
//               paddingLeft: showText ? "20px" : "0",
//               marginTop: "70px",
//               height: "100vh",
//               overflowY: "hidden",
//             }}
//           >
//             <Row>
//               <Col
//                 xs={12}
//                 sm={6}
//                 lg={4}
//                 style={{ height: "350px", marginTop: "15px" }}
//               >
//                 <Chart
//                   options={state.options}
//                   series={state.series}
//                   type="bar"
//                   width="100%"
//                 />
//               </Col>

//               <Col
//                 xs={12}
//                 sm={6}
//                 lg={4}
//                 style={{ height: "350px", marginTop: "15px" }}
//               >
//                 <Chart
//                   options={state.options}
//                   series={state.series}
//                   type="line"
//                   width="100%"
//                 />
//               </Col>

//               <Col
//                 xs={12}
//                 sm={6}
//                 lg={4}
//                 style={{ height: "350px", marginTop: "15px" }}
//               >
//                 <Chart
//                   options={state.options}
//                   series={state.series}
//                   type="area"
//                   width="100%"
//                 />
//               </Col>
//               <Col
//                 xs={12}
//                 sm={6}
//                 lg={4}
//                 style={{ height: "300px", marginTop: "15px" }}
//               >
//                 <Chart
//                   options={state.options}
//                   series={state.series}
//                   type="radar"
//                   width="100%"
//                 />
//               </Col>

//               <Col
//                 xs={12}
//                 sm={6}
//                 lg={8}
//                 style={{ height: "300px", marginTop: "15px" }}
//               >
//                 <Chart
//                   options={state.options}
//                   series={state.series}
//                   type="scatter"
//                   width="100%"
//                   height="100%"
//                 />
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//       <div>
//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import InfoIcon from "@mui/icons-material/Info";
import Home from "./components/Home/Home";
import SidebarMobile from "./components/SidebarMobile/SidebarMobile";
import ChartBoard from "./components/ChartBoard/ChartBoard";
import Header from './components/Header/Hedaer'
function App() {
  
  return (
    <div>
      
      <Header/>
        <ChartBoard/> 
            
    </div>
  );
}

export default App;
