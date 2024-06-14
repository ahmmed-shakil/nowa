import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateRestaurantIssueItemFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/Issue/Issue_Item/formConfigs";

const tableData = [
  {
    id: 1,
    restaurantRecquisitionName: "Recquisition A",
    quantityIssued: 50,
    remarks: "Overpriced",
    restaurant_issuesName: "Issue A",
  },
  {
    id: 1,
    restaurantRecquisitionName: "Recquisition C",
    quantityIssued: 70,
    remarks: "Great Quality",
    restaurant_issuesName: "Issue B",
  },
  {
    id: 1,
    restaurantRecquisitionName: "Recquisition B",
    quantityIssued: 45,
    remarks: "Overpriced",
    restaurant_issuesName: "Issue C",
  },
];

const tableColumns = [
  {
    field: "restaurantRecquisitionName",
    label: "Restaurant Recquisition Name",
  },
  { field: "quantityIssued", label: "Quantity" },
  { field: "remarks", label: "Remarks" },
  { field: "restaurant_issuesName", label: "Issue_Name" },
];

const RestaurantIssueItem = () => {
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
    setForm(generateRestaurantIssueItemFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Restaurant Issued Item"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Restaurant Issued Item List"}>
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Restaurant Issued Item Table"
                  addButtonText="Add New Item"
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

RestaurantIssueItem.layout = "Contentlayout";

export default RestaurantIssueItem;
