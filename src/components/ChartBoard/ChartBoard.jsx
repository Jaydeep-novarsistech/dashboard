// import React, { useState } from "react";
// import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
// import Chart from "react-apexcharts";


// const ChartBoard = () => {
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

//   return (
//     <div>
//       <Container fluid>
//         <Row>
//           <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
//             <Chart options={state.options} series={state.series} type="bar" width="100%" />
//           </Col>

//           <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
//             <Chart options={state.options} series={state.series} type="line" width="100%" />
//           </Col>

//           <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
//             <Chart options={state.options} series={state.series} type="area" width="100%" />
//           </Col>

//           <Col xs={12} sm={6} lg={4} style={{ height: "300px", marginTop: "15px" }}>
//             <Chart options={state.options} series={state.series} type="radar" width="100%" />
//           </Col>

//           <Col xs={12} sm={6} lg={8} style={{ height: "300px", marginTop: "15px" }}>
//             <Chart options={state.options} series={state.series} type="scatter" width="100%" height="100%" />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ChartBoard;


// ChartBoard.js

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import SidebarMobile from "../SidebarMobile/SidebarMobile"; // Import the Sidebar component
import "./ChartBoard.css";
import Home from "../Home/Home";

const ChartBoard = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
      },
      {
        name: "series-2",
        data: [3, 60, 35, 80, 49, 70, 20, 81, 100],
      },
    ],
  });
  const mainContentStyle = {
    width: "100%", // Set width to 100% for full-width content
    marginLeft: 0, // Remove margin on larger screens
    paddingLeft: "15px", // Adjust padding to maintain content spacing
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Container >
        <Row>
          {/* Sidebar */}
          <Col lg={3} md={4} className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <SidebarMobile />
          </Col>

          {/* Main content */}
          <Col lg={12} md={8} className="main-content">
            <Row className="custom-row"> 
              <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
                <Chart options={state.options} series={state.series} type="bar" width="100%" />
              </Col>

              <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
                <Chart options={state.options} series={state.series} type="line" width="100%" />
              </Col>

              <Col xs={12} sm={6} lg={4} style={{ height: "350px", marginTop: "15px" }}>
                <Chart options={state.options} series={state.series} type="area" width="100%" />
              </Col>

              <Col xs={12} sm={6} lg={4} style={{ height: "300px", marginTop: "15px" }}>
                <Chart options={state.options} series={state.series} type="radar" width="100%" />
              </Col>

              <Col xs={12} sm={6} lg={8} style={{ height: "300px", marginTop: "15px" }}>
                <Chart options={state.options} series={state.series} type="scatter" width="100%" height="100%" />
              </Col>
              <Home/>
            </Row>
          </Col>
          
          {/* Mobile toggle button */}
          <div className="mobile-toggle-btn" onClick={handleToggleSidebar}>
            ☰
          </div>
        </Row>
        
      </Container>
    </div>
  );
};

export default ChartBoard;
