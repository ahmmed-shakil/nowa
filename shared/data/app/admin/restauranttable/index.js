import React, { useState, Fragment } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { nanoid } from "nanoid";
import { RestaurantFormWizard } from "../forms/create-restaurant-form";
import { EditRestaurantFormWizard } from "../forms/edit-restaurant-form";
import { RestaurantDetailsWizard } from "./details";
import ModalComponent from "@/components/Modal/ModalComponent";

export const RestaurantsTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [viewModalShow, setViewModalShow] = useState(false);
  const data = [
    {
      restaurantName: "POG",
      email: "pog@gmail.com",
      phoneNumber: "2345675321",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      zipCode: 1234,
      countryCode: "IN",
    },
    {
      restaurantName: "POG",
      email: "pog@gmail.com",
      phoneNumber: "2345675321",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      zipCode: 1234,
      countryCode: "IN",
    },
    {
      restaurantName: "POG",
      email: "pog@gmail.com",
      phoneNumber: "2345675321",
      city: "New Delhi",
      state: "Delhi sdfsfsagsgs",
      country: "India",
      zipCode: 1234,
      countryCode: "IN",
    },
  ];
  const [contacts, setContacts] = useState(data);
  const [viewFormData, setViewFormData] = useState({
    restaurantName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    countryCode: "",
  });

  const [editFormData, setEditFormData] = useState({
    restaurantName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    countryCode: "",
  });

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditModalShow(true);

    const formValues = {
      restaurantName: contact.restaurantName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      city: contact.city,
      state: contact.state,
      country: contact.country,
      zipCode: contact.zipCode,
      countryCode: contact.countryCode,
    };

    setEditFormData(formValues);
  };
  const handleViewClick = (event, contact) => {
    event.preventDefault();
    setViewModalShow(true);

    const formValues = {
      restaurantName: contact.restaurantName,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      city: contact.city,
      state: contact.state,
      country: contact.country,
      zipCode: contact.zipCode,
      countryCode: contact.countryCode,
    };

    setViewFormData(formValues);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <Button
        variant=""
        className="btn btn-primary mb-3"
        onClick={() => setModalShow(true)}
      >
        Add New Restaurant
      </Button>
      <Table
        id="delete-datatable"
        className="table table-bordered text-nowrap border-bottom"
      >
        <thead>
          <tr>
            <th className="wd-5p text-center">S NO</th>
            <th>Restaurant Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>Approved By</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => (
            <Fragment key={contact.id}>
              <ReadOnlyRow
                contact={{ ...contact, sno: i + 1 }}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                handleViewClick={handleViewClick}
              />
            </Fragment>
          ))}
        </tbody>
      </Table>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Restaurant
          </Modal.Title>
          <Button
            variant=""
            className="btn btn-close"
            onClick={() => setModalShow(false)}
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <RestaurantFormWizard />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary wd-20p"
            onClick={() => setModalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalComponent
        title={"Restaurant Details"}
        openModal={viewModalShow}
        setOpenModal={setViewModalShow}
      >
        <RestaurantDetailsWizard initialData={viewFormData} />
      </ModalComponent>
      <ModalComponent
        title={"Edit Restaurant"}
        openModal={editModalShow}
        setOpenModal={setEditModalShow}
      >
        <EditRestaurantFormWizard initialData={editFormData} />
      </ModalComponent>
    </div>
  );
};
const ReadOnlyRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
  handleViewClick,
}) => {
  return (
    <tr>
      <td className="wd-5p text-center">{contact.sno}</td>
      <td>{contact.restaurantName}</td>
      <td>{contact.email}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.city}</td>
      {/* <td>{contact.approvedBy}</td> */}
      <td>John Smith</td>
      <td>
        <Button
          variant=""
          className="btn btn-warning me-1"
          type="button"
          onClick={(event) => handleViewClick(event, contact)}
        >
          View
        </Button>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button
          variant=""
          className="btn btn-danger"
          type="button"
          onClick={(event) => handleDeleteClick(event, contact)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};
