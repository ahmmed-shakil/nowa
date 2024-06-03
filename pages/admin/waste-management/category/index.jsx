import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateWasteManagementCategoryFormStepsConfig,
  getInitialValues,
} from "./formConfigs";

const tableData = [
  {
    id: 1,
    wasteManagementCategoryName: "Category AB1",
  },
  {
    id: 2,
    wasteManagementCategoryName: "Category AB2",
  },
  {
    id: 3,
    wasteManagementCategoryName: "Category AB3",
  },
];

const tableColumns = [
  { field: "wasteManagementCategoryName", label: "Waste Management Category Name" },
];

const wasteManagementCategory = () => {
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
    setForm(generateWasteManagementCategoryFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Waste Management Category"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Waste Management Category List"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Waste Management Category Table"
                  addButtonText="Add New Category"
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

wasteManagementCategory.layout = "Contentlayout";

export default wasteManagementCategory;
