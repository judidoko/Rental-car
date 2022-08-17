import React from "react";
import "../../styles/BookingForm.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking_form d-inline-block me-2 mb-3">
        <input type="text" placeholder="First Name" id="" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-3">
        <input type="text" placeholder="Last Name" id="" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-2 mb-3">
        <input type="email" placeholder="Email Address" id="" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-3">
        <input type="number" placeholder="Phone Number" id="" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-2 mb-3">
        <input type="text" placeholder="From Address" id="" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-3">
        <input type="text" placeholder="To Address" id="" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-2 mb-3">
        <label>Number of Persons</label>
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 persons">2 Persons</option>
          <option value="3 persons">3 Persons</option>
          <option value="4 persons">4 Persons</option>
          <option value="5+ persons">5+ Persons</option>
        </select>
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-3">
        <label>Number of Luggages</label>
        <select name="" id="">
          <option value="1 luggage">1 Luggage</option>
          <option value="2 luggages">2 Luggages</option>
          <option value="3 luggages">3 Luggages</option>
          <option value="4 luggages">4 Luggages</option>
          <option value="5+ luggages">5+ Luggages</option>
        </select>
      </FormGroup>
      <FormGroup className="booking_form d-inline-block me-2 mb-3">
        <input type="date" placeholder="Journey Date" className="date_picker" />
      </FormGroup>
      <FormGroup className="booking_form d-inline-block ms-1 mb-3">
        <input type="time" placeholder="Journey Time" className="time_picker" />
      </FormGroup>
      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write A Short Note ..."
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
