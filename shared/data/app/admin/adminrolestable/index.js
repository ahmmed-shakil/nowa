import React, { useState, Fragment } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { nanoid } from "nanoid";
import { Prefilledinputs } from "../../../form/advanced-forms";
import AdminPermissionsMultiSelect from "../forms/admin-permissions-select";

export const AdminRolesTable = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [permissionsModalShow, setpermissionsModalShow] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState([]);
  const options23 = [
    { label: "Create New Cashier", value: "firefox" },
    { label: "Create New Restaurant", value: "chrome " },
    { label: "Update Cashier", value: "safari" },
    { label: "Delete Cashier", value: "operate" },
    { label: "Update Restaurant", value: "internet explore " },
    { label: "Update Restaurant", value: "internet explore " },
  ];
  const data = [
    {
      id: "1",
      name: "Area Manager",
      slug: "area_manager",
      admin_permissions: [
        { label: "Create New Cashier", slug: "firefox" },
        { label: "Create New Restaurant", slug: "chrome " },
        { label: "Update Restaurant", slug: "internet explore " },
      ],
    },
    {
      id: "2",
      name: "HR",
      slug: "hr",
      admin_permissions: [
        { label: "Create New Restaurant", slug: "chrome " },
        { label: "Update Restaurant", slug: "internet explore " },
      ],
    },
  ];
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    slug: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    slug: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleUpdatePErmissionsFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      name: addFormData.name,
      slug: addFormData.slug,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      name: addFormData.name,
      slug: addFormData.slug,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      name: editFormData.name,
      slug: editFormData.slug,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      slug: contact.slug,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  const handlePermissionModalClick = (contact) => {
    console.log(contact, "Targetted Row");
    setpermissionsModalShow(true);
    setSelectedRow(contact.admin_permissions || []);
  };

  return (
    <div className="app-container">
      <Form onSubmit={handleEditFormSubmit}>
        <div className=" d-flex justify-content-end">
          <Button
            variant=""
            className="btn btn-primary mb-3"
            onClick={() => setModalShow(true)}
          >
            Add New Role
          </Button>
        </div>
        <Table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th className="wd-5p text-center">S NO</th>
              <th>Role Name</th>
              <th>Slug</th>
              <th>Permissions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, i) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={{ ...editFormData, sno: i + 1 }}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={{ ...contact, sno: i + 1 }}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    handlePermissionModalClick={handlePermissionModalClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </Form>

      {/* <h2>Add a Contact</h2> */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Role
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
          <Form onSubmit={handleAddFormSubmit} className="">
            <Form.Control
              type="text"
              name="name"
              required
              placeholder="Enter role name..."
              onChange={handleAddFormChange}
              className="form-control mb-2 border"
            />
            <Form.Control
              type="text"
              name="slug"
              required
              placeholder="Enter slug..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <div className="my-4">
              <p className="mg-b-10">Select Permissions</p>
              <AdminPermissionsMultiSelect />
            </div>
            <Button
              variant=""
              className="btn btn-primary me-2 wd-100p "
              type="submit"
            >
              Add
            </Button>
          </Form>
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
      <Modal
        show={permissionsModalShow}
        onHide={() => setpermissionsModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Role Permissions
          </Modal.Title>
          <Button
            variant=""
            className="btn btn-close"
            onClick={() => setpermissionsModalShow(false)}
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdatePErmissionsFormSubmit} className="">
            <div className="mb-4">
              <AdminPermissionsMultiSelect selected={selectedRow} />
            </div>
            <Button
              variant=""
              className="btn btn-primary me-2 wd-100p "
              type="submit"
            >
              Update Permissions
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary wd-20p"
            onClick={() => setpermissionsModalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter role name..."
          name="name"
          value={editFormData.sno}
          disabled
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter role name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter slug..."
          name="lastname"
          value={editFormData.slug}
          disabled
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          disabled
        >
          View Permissions
        </Button>
      </td>
      <td>
        <Button variant="" className="btn btn-primary me-1" type="submit">
          Save
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          type="button "
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
};
const ReadOnlyRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
  handlePermissionModalClick,
}) => {
  return (
    <tr>
      <td>{contact.sno}</td>
      <td>{contact.name}</td>
      <td>{contact.slug}</td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handlePermissionModalClick(contact)}
        >
          View Permissions
        </Button>
      </td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
      </td>
    </tr>
  );
};
