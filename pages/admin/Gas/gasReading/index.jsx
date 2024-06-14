import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateGasReadingFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/Gas/gasReading/formConfigs";

const tableData = [
  {
    id: 1,
    LPG: 12,
    restaurantUserName: "Restaurant A",
    Amount: 300,
    openingReading: 24,
    closingReading: 26,
    netReading: 30,
    totalAmount: 4500,
    covers: 23,
    PPC: 18,
  },
  {
    id: 2,
    LPG: 20,
    restaurantUserName: "Restaurant B",
    Amount: 400,
    openingReading: 32,
    closingReading: 38,
    netReading: 30,
    totalAmount: 4000,
    covers: 41,
    PPC: 15,
  },
  {
    id: 2,
    LPG: 15,
    restaurantUserName: "Restaurant C",
    Amount: 450,
    openingReading: 16,
    closingReading: 20,
    netReading: 25,
    totalAmount: 3500,
    covers: 34,
    PPC: 10,
  },
];

const tableColumns = [
  { field: "LPG", label: "LPG" },
  { field: "restaurantUserName", label: "Restaurant" },
  { field: "Amount", label: "Amount" },
  { field: "openingReading", label: "OpeningReading" },
  { field: "closingReading", label: "ClosingReading" },
  { field: "netReading", label: "NetReading" },
  { field: "totalAmount", label: "TotalAmount" },
  { field: "covers", label: "Covers" },
  { field: "PPC", label: "PPC" },
];

const GasReading = () => {
  const navigate = useRouter();

  const [initialData, setInitialData] = useState({});
  const [editItemID, setEditItemID] = useState("");

  useEffect(() => {
    initialData && getInitialValues(initialData);
  }, [initialData]);

  const { status } = useSession();

  // useEffect(() => {
  //   if (status && status === "unauthenticated") {
  //     navigate.push("/");
  //   }
  // }, [status]);

  const [form, setForm] = useState([]);

  useMemo(() => {
    setForm(generateGasReadingFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Gas Reading"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Gas Reading List"}>
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Gas Reading Table"
                  addButtonText="Add New Reading"
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

GasReading.layout = "Contentlayout";

export default GasReading;
