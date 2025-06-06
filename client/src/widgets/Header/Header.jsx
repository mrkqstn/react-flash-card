import React from "react";
import { NavLink } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./Header.module.css";

export default function Header({ user }) {
  const navigate = useNavigate();

  return (
    <Navbar
      // bg="primary"
      variant="dark"
      expand="lg"
      style={{
        width: "100%",
        boxShadow: "0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15)",
        backgroundColor: "#4e73df"
      }}
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/start"
        style={{ fontSize: '30px'}}
        >
          Главная
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto" style={{ marginLeft: "1550px" }}>
            <Nav.Link as={NavLink} to="/stats"
            style={{ fontSize: '30px'}}
            >
              Статистика
            </Nav.Link>
            <div>
              <img
                src="https://images.iptv.rt.ru/images/c6ubu53ir4sslltv6udg.jpg"
                alt="Hello"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginTop: "6px"
                }}
              />
            </div>
          </Nav>
          {user?.status === "logged" && (
            <Navbar.Text className="text-white">
              Привет, {user.data?.name}
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
