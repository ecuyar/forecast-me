import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import CityCard from "../CityCard";
import "../page_css/CityPage.css";

function CityPage() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <CityCard city={{ id: 1, name: "Kayseri" }}></CityCard>
          <CityCard city={{ id: 2, name: "İstanbul" }}></CityCard>
        </Row>
      </Container>

      <Button
        className="card_button"
        variant="danger"
        onClick={() => {
          localStorage.clear();
          console.log("storage cleared");
        }}
      >
        Delete LS
      </Button>
    </div>
  );
}

export default CityPage;
