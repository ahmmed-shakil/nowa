import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import { generateStoreFormStepsConfig, getInitialValues } from "./formConfigs";

const tableData = [
  {
    id: 1,
    storeName: "Store A",
    restaurantName: "HOLY SMOKE RESTAURANTS PVT. LTD.",
    email: "holysmokerestaurantsprivatelimited@gmail.com",
    phoneNumber: "6856210141",
  },
  {
    id: 2,
    storeName: "Store B",
    restaurantName: "POG",
    email: "store2@gmail.com",
    phoneNumber: "3853110141",
  },
  {
    id: 3,
    storeName: "Store C",
    restaurantName: "POG",
    email: "store3@gmail.com",
    phoneNumber: "3852371341",
  },
];

const tableColumns = [
  { field: "storeName", label: "Name" },
  { field: "restaurantName", label: "Restaurant Name" },
  { field: "email", label: "Email Address" },
  { field: "phoneNumber", label: "Phone Number" },
];

const Stores = () => {
  const navigate = useRouter();

  const [initialData, setInitialData] = useState({});
  const [editItemID, setEditItemID] = useState("");

  useEffect(() => {
    initialData && getInitialValues(initialData);
  }, [initialData]);

  const { status } = useSession();

  useEffect(() => {
    if (status && status === "unauthenticated") {
      navigate.push("/");
    }
  }, [status]);

  const [form, setForm] = useState([]);

  useMemo(() => {
    setForm(generateStoreFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Stores"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Chef List"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="Create New Chef"
                  addButtonText="Add New Chef"
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

Stores.layout = "Contentlayout";

export default Stores;
