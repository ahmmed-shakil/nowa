import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateSKUSectionFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/storeSKU/Section/formConfigs";

const tableData = [
  {
    id: 1,
    storeSKUSectionName: "Section AC2",
    storeSKUCategoryName: "Category AB2",
    approvalStatus: true,
    createdBy: "user2",
    approvedBy: "userB",
    updatedBy: "user2B",
    enabled: false,
  },
  {
    id: 2,
    storeSKUSectionName: "Section AC1",
    storeSKUCategoryName: "Category AB1",
    approvalStatus: true,
    createdBy: "user2",
    approvedBy: "userB",
    updatedBy: "user2B",
    enabled: false,
  },
  {
    id: 3,
    storeSKUSectionName: "Section AC3",
    storeSKUCategoryName: "Category AB3",
    approvalStatus: true,
    createdBy: "user2",
    approvedBy: "userB",
    updatedBy: "user2B",
    enabled: false,
  },
];

const tableColumns = [
  { field: "storeSKUSectionName", label: "Name" },
  { field: "storeSKUCategoryName", label: "Category" },
  { field: "approvalStatus", label: "Approval Status" },
  { field: "createdBy", label: "CreatedBy" },
  { field: "approvedBy", label: "ApprovedBy" },
  { field: "updatedBy", label: "UpdatedBy " },
  { field: "enabled", label: "Enabled" },
];

const Section = () => {
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
    setForm(generateSKUSectionFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"SKU Section"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"SKU Section"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My SKU Section Table"
                  addButtonText="Add New Section"
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

Section.layout = "Contentlayout";

export default Section;
