import React, { useState, Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import ModalComponent from "../Modal/ModalComponent";
import FormHolder from "../Forms/FormHolder";
import MultiStepWizard from "../Forms/MultiStepForm/MultiStepWizard/MultiStepWizard";
const DataTablesWithModalEdit = ({
  data,
  columns,
  title,
  addButtonText,
  formStepsConfig,
  handleAddRowFormSubmit,
  handleEditRowFormSubmit,
  handleDeleteRowData,
  setInitialData,
  setEditItemID,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [viewModalShow, setViewModalShow] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [viewFormData, setViewFormData] = useState({});
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (event, contact) => {
    console.log(contact, "EDIT");
    event.preventDefault();
    setEditModalShow(true);
    setEditFormData(contact);
    setInitialData(contact);
    setEditItemID(contact.id);
  };

  const handleViewClick = (event, contact) => {
    event.preventDefault();
    setViewModalShow(true);
    setViewFormData(contact);
    setInitialData(contact);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(newContacts);
    handleDeleteRowData(contactId);
  };

  return (
    <div className="app-container">
      <div className=" d-flex justify-content-end">
        <Button
          variant=""
          className="btn btn-primary mb-3"
          onClick={() => {
            setInitialData(null);
            setModalShow(true);
          }}
        >
          {addButtonText || "Add New Item"}
        </Button>
      </div>
      <Table className="table table-bordered text-nowrap border-bottom">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={column.className || ""}>
                {column.label}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <Fragment key={index}>
              <ReadOnlyRow
                contact={{ ...contact, sno: index + 1 }}
                columns={columns}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
                handleViewClick={handleViewClick}
              />
            </Fragment>
          ))}
        </tbody>
      </Table>

      <ModalComponent
        title={title || "Add New Item"}
        openModal={modalShow}
        setOpenModal={setModalShow}
      >
        <MultiStepWizard
          formStepsConfig={formStepsConfig}
          handleFormSubmit={handleAddRowFormSubmit}
          // initialData={null}
          // setInitialData={setInitialData}
        />
      </ModalComponent>
      <ModalComponent
        title={"Details"}
        openModal={viewModalShow}
        setOpenModal={setViewModalShow}
      >
        <MultiStepWizard
          formStepsConfig={formStepsConfig}
          // initialData={viewFormData}
          readOnly={true}
          // setInitialData={setInitialData}
        />
      </ModalComponent>
      <ModalComponent
        title={"Edit"}
        openModal={editModalShow}
        setOpenModal={setEditModalShow}
      >
        <MultiStepWizard
          formStepsConfig={formStepsConfig}
          handleFormSubmit={handleEditRowFormSubmit}
          // initialData={editFormData}
          // setInitialData={setInitialData}
        />
      </ModalComponent>
    </div>
  );
};

const ReadOnlyRow = ({
  contact,
  columns,
  handleEditClick,
  handleDeleteClick,
  handleViewClick,
}) => {
  return (
    <tr>
      {columns.map((column, index) => (
        <td key={index} className={column.className || ""}>
          {contact[column.field]}
        </td>
      ))}
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
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default DataTablesWithModalEdit;
