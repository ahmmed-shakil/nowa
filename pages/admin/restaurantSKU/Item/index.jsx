import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateSKUItemFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/restaurantSKU/Item/formConfigs";

const tableData = [
  {
    id: 1,
    SKUItemName: "Item A",
    SKUSectionName: "Section 1",
    SKUItemMeasurementUnit: "kgs",
  },
  {
    id: 2,
    SKUItemName: "Item C",
    SKUSectionName: "Section 3",
    SKUItemMeasurementUnit: "litres",
  },
  {
    id: 3,
    SKUItemName: "Item B",
    SKUSectionName: "Section 2",
    SKUItemMeasurementUnit: "kgs",
  },
];

const tableColumns = [
  { field: "SKUItemName", label: "Item" },
  { field: "SKUSectionName", label: "Section" },
  { field: "SKUItemMeasurementUnit", label: "Unit" },
];

const Item = () => {
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
    setForm(generateSKUItemFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"SKU Item"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"SKU Item"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My SKU Item Table"
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

Item.layout = "Contentlayout";

export default Item;
