import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateWasteManagementItemFormStepsConfig,
  getInitialValues,
} from "../../../../formConfigs/waste-management/item/formConfigs";

const tableData = [
  {
    id: 1,
    wasteManagementItemName: "Item 1",
    wasteManagementCategoryName: "Category AB2",
    restaurantUserName: "Restaurant B",
    SKUVariantItemName: "Variant A",
    wastedItemQuantity: 20,
  },
  {
    id: 2,
    wasteManagementItemName: "Item 2",
    wasteManagementCategoryName: "Category AB3",
    restaurantUserName: "Restaurant C",
    SKUVariantItemName: "Variant B",
    wastedItemQuantity: 45,
  },
  {
    id: 3,
    wasteManagementItemName: "Item 3",
    wasteManagementCategoryName: "Category AB1",
    restaurantUserName: "Restaurant A",
    SKUVariantItemName: "Variant C",
    wastedItemQuantity: 30,
  },
];

const tableColumns = [
  { field: "wasteManagementItemName", label: "Item" },
  { field: "wasteManagementCategoryName", label: "Category" },
  { field: "restaurantUserName", label: "Restaurant" },
  { field: "SKUVariantItemName", label: "SKU Variant" },
  { field: "wastedItemQuantity", label: "Quantity" },
];

const WasteManagementItem = () => {
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
    setForm(generateWasteManagementItemFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Waste Management Item Category"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Waste Management Item"}>
              <div className="table-responsive  deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Waste Management Item Table"
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

WasteManagementItem.layout = "Contentlayout";

export default WasteManagementItem;
