
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Chart from "react-apexcharts";
import HomeIcon from "@mui/icons-material/Home";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
 import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

const SidebarMobile = () => {
    const [showText, setShowText] = useState(true);
  const handleButtonClick = () => {
    setShowText(!showText);
  };
  return (
    <>
      <Container fluid>
        <Row style={{ height: "95vh" }}>
          <Col
            xs={showText ? 12 : 2}
            md={showText ? 2 : 1}
            style={{
              backgroundColor: "#343a40",
              color: "white",
              padding: "20px",
              height: "100vh",
              transition: "width 0.5s, padding-right 0.5s",
              width: showText ? "200px" : "100px",
              paddingRight: showText ? "20px" : "0",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 999,
              marginTop:'52px',
            }}
          >
            <h2>Dashboard</h2>
            <Nav defaultActiveKey="#home" className="flex-column">
              <Nav.Link href="#home">
                <HomeIcon /> {showText && "Home"}
              </Nav.Link>
              <Nav.Link href="#about">
                <InfoIcon /> {showText && "About"}
              </Nav.Link>
              <Nav.Link href="#services">
                <ManageAccountsIcon /> {showText && "Services"}
              </Nav.Link>
              <Nav.Link href="#contact">
                <AddIcCallIcon /> {showText && "Contact"}
              </Nav.Link>
              <Nav.Link href="#about">
                <InfoIcon /> {showText && "About"}
              </Nav.Link>
              <Nav.Link href="#services">
                <ManageAccountsIcon /> {showText && "Services"}
              </Nav.Link>
              <Nav.Link href="#contact">
                <AddIcCallIcon /> {showText && "Contact"}
              </Nav.Link>
              <Nav.Link href="#about">
                <InfoIcon /> {showText && "About"}
              </Nav.Link>
              <Nav.Link href="#services">
                <ManageAccountsIcon /> {showText && "Services"}
              </Nav.Link>
              <Nav.Link href="#contact">
                <AddIcCallIcon /> {showText && "Contact"}
              </Nav.Link>
              <Nav.Link href="#about">
                <InfoIcon /> {showText && "About"}
              </Nav.Link>
              <Nav.Link href="#services">
                <ManageAccountsIcon /> {showText && "Services"}
              </Nav.Link>
              <Nav.Link href="#contact">
                <AddIcCallIcon /> {showText && "Contact"}
              </Nav.Link>
              <Nav.Link href="#about">
                <InfoIcon /> {showText && "About"}
              </Nav.Link>
            </Nav>
            <button
              onClick={handleButtonClick}
              style={{
                marginTop: "auto",
                width: "100%",
                padding: "10px",
              }}
            >
              T
            </button>
          </Col>

          <Col
            xs={showText ? 12 : 10}
            md={showText ? 10 : 11}
            style={{
              marginLeft: showText ? "200px" : "100px",
              paddingLeft: showText ? "20px" : "0",
              marginTop: "70px",
              height: "100vh",
              overflowY: "hidden",
            }}
          >
            </Col>
          
          </Row> 
        </Container>
    </>
  )
}




export default SidebarMobile