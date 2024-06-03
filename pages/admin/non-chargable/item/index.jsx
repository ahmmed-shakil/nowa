import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateNonChargableItemFormStepsConfig,
  getInitialValues,
} from "./formConfigs";

const tableData = [
  {
    id: 1,
    SKUItemVariantName: "Item 1",
    restaurantUserName: "Restaurant B",
    nonChargableItemQuantity: 150,
    nonChargableItemRate: 200,
    nonChargableItemAmount: 30000,
  },
  {
    id: 2,
    SKUItemVariantName: "Item 2",
    restaurantUserName: "Restaurant A",
    nonChargableItemQuantity: 120,
    nonChargableItemRate: 300,
    nonChargableItemAmount: 36000,
  },
  {
    id: 3,
    SKUItemVariantName: "Item 3",
    restaurantUserName: "Restaurant C",
    nonChargableItemQuantity: 250,
    nonChargableItemRate: 100,
    nonChargableItemAmount: 25000,
  },
];

const tableColumns = [
  { field: "SKUItemVariantName", label: "Item" },
  { field: "restaurantUserName", label: "Restaurant" },
  { field: "nonChargableItemQuantity", label: "Quantity" },
  { field: "nonChargableItemRate", label: "Rate" },
  // { field: "nonChargableItemAmount", label: "Amount" },
];

const NonChargableItem = () => {
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
    setForm(generateNonChargableItemFormStepsConfig(initialData));
  }, [initialData]);

  const handleAddRowFormSubmit = (data) => {};

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Non-Chargable Item"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Non-Chargable Item"}>
              <div className="table-responsive deleted-table">
                <DataTablesWithModalEdit
                  data={tableData}
                  columns={tableColumns}
                  title="My Non-Chargable Item Table"
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

NonChargableItem.layout = "Contentlayout";

export default NonChargableItem;
