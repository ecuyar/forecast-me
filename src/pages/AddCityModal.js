import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddCityModal(props) {
  const [cityName, setCityName] = useState("");

  function SubmitForm(e) {
    e.preventDefault();

    const form = document.getElementById("addCityForm");
    form.checkValidity();
    form.reportValidity();

    const cityString = document.getElementById("cityInput");

    setCityName(cityString);
    console.log(cityString);
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Ekle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form controlId="addCityForm">
          <Form.Group className="mb-3" controlId="formCityName">
            <Form.Control
              controlId="cityInput"
              required
              type="text"
              placeholder="Şehir adı..."
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </Form.Group>
          <hr />
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => SubmitForm(e)}
          >
            Kaydet
          </Button>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddCityModal;
