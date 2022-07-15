import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddCityModal from "./pages/AddCityModal";

function CityCard(props) {
  const [cityId, setCityId] = useState(props.city.id);
  const [cityName, setCityName] = useState(props.city.name);

  const [modalShow, setModalShow] = useState(false);

  function addCity(cityId) {
    console.log(cityId);
  }

  function addCityToLocalStorage(city_name, city_index) {
    // document.getElementById("exampleModal").modal("show");
    // $("#exampleModal").modal("show");

    setModalShow(true);
    /*
     localStorage.setItem("city_" + city_index, city_name);
     */
    console.log("city_" + city_index);
  }

  function getCityFromLocalStorage(city_index) {
    const a = localStorage.getItem(city_index);
    console.log(a);
  }

  return (
    <div style={{ width: "auto" }}>
      <Card className="card">
        <Card.Img
          className="card_image"
          variant="top"
          src="/brightness-high.svg"
          style={{ width: "3rem" }}
        />
        <Card.Body>
          <Card.Title>{cityName}</Card.Title>
          <Card.Text>Parçalı Bulutlu</Card.Text>
          <Button
            className="card_button"
            variant="primary"
            onClick={() => addCityToLocalStorage(cityName, cityId)}
          >
            Add
          </Button>
          <Button className="card_button" variant="success">
            Change
          </Button>
          <Button className="card_button" variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>

      <AddCityModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default CityCard;
