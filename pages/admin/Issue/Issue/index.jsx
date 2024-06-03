import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateRestaurantIssueFormStepsConfig,
  getInitialValues,
} from "./formConfigs";

const tableData = [
  {
    id: 1,
    restaurantRecquisitionName: "Recquisition A",
  },
  {
    id: 2,
    restaurantRecquisitionName: "Recquisition C",
  },
  {
    id: 3,
    restaurantRecquisitionName: "Recquisition B",
  },
];

const tableColumns = [
  { field: "restaurantRecquisitionName", label: "Restaurant Recquisition Name" },
];

const restaurantIssue = () => {
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
    setForm(generateRestaurantIssueFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Restaurant Recquisition"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Restaurant Issue List"}>
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Restaurant Issue Table"
                  addButtonText="Add New Issue"
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

restaurantIssue.layout = "Contentlayout";

export default restaurantIssue;
