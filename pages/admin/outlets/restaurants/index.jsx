import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateFormStepsConfig,
  generateRestaurantFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/outlets/restaurants/formConfigs";

const tableData = [
  {
    id: 1,
    restaurantName: "HOLY SMOKE RESTAURANTS PVT. LTD.",
    email: "holysmokerestaurantsprivatelimited@gmail.com",
    phoneNumber: "2345675321",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    zipCode: 1234,
    countryCode: "IN",
  },
  {
    id: 1,
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
    id: 1,
    restaurantName: "POG",
    email: "pog@gmail.com",
    phoneNumber: "2345675321",
    city: "New Delhi",
    state: "Delhi",
    country: "India",
    zipCode: 1234,
    countryCode: "IN",
  },
  // Add more data items as needed
];

const tableColumns = [
  { field: "restaurantName", label: "Restaurant Name" },
  { field: "email", label: "Email Address" },
  { field: "phoneNumber", label: "Phone Number" },
  { field: "city", label: "City" },
];

const Restaurants = () => {
  const navigate = useRouter();

  const [initialData, setInitialData] = useState({});
  const [editItemID, setEditItemID] = useState("");

  const { status } = useSession();

  // useEffect(() => {
  //   if (status && status === "unauthenticated") {
  //     navigate.push("/");
  //   }
  // }, [status]);

  const [form, setForm] = useState([]);

  useMemo(() => {
    setForm(generateRestaurantFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {
    console.log("Restaurant Crud", "add new item", data);
  };

  const handleEditRowFormSubmit = (data) => {
    console.log("Restaurant Crud", "edit item", data, "ID:", editItemID);
  };

  const handleDeleteRowData = (id) => {
    console.log("Restaurant Crud", "delete item", id);
  };

  return (
    <>
      <Seo title={"Restaurants"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Restaurant List"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  // this title will be shown on the modal for add new item
                  title="Add New Restaurant"
                  addButtonText="Add New Restaurant"
                  formStepsConfig={form}
                  setInitialData={setInitialData}
                  setEditItemID={setEditItemID}
                  handleAddRowFormSubmit={handleAddRowFormSubmit}
                  handleEditRowFormSubmit={handleEditRowFormSubmit}
                  handleDeleteRowData={handleDeleteRowData}
                />
              </div>
            </Card_F_Width>
          </Col>
        </Row>
        {/* <!-- row closed --> */}
      </React.Fragment>
    </>
  );
};

Restaurants.layout = "Contentlayout";

export default Restaurants;
