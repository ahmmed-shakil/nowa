import React, { useEffect, useMemo, useState } from "react";
import Seo from "@/shared/layout-components/seo/seo";
import { Col, Row, Card } from "react-bootstrap";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";
import DataTablesWithModalEdit from "@/components/Tables/DataTablesWithModalEdit";
import { Card_F_Width } from "@/components/Cards";
import {
  generateVendorCategoryFormStepsConfig,
  getInitialValues,
} from "./formConfigs";
import { useDispatch, useSelector } from "react-redux";
import {
  createVendorCategory,
  getVendorCategory,
} from "@/shared/redux/actions/store/vendor/vendorCategoryAction";

const tableColumns = [
  { field: "vendorCategoryName", label: "Name" },
  { field: "approvalStatus", label: "Approval Status" },
  // { field: "createdBy", label: "CreatedBy" },
  // { field: "approvedBy", label: "ApprovedBy" },
  // { field: "updatedBy", label: "UpdatedBy " },
  { field: "enabled", label: "Enabled" },
];

const vendorCategory = () => {
  //  Session
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status && status === "unauthenticated") {
      navigate.push("/");
    }
  }, [status]);

  // Hooks
  const navigate = useRouter();
  const dispatch = useDispatch();

  //Component States
  const [categoriesTableData, setCategoriesTableData] = useState([]);
  const [initialData, setInitialData] = useState({});
  const [editItemID, setEditItemID] = useState("");
  const [form, setForm] = useState([]);

  useEffect(() => {
    initialData && getInitialValues(initialData);
  }, [initialData]);

  useMemo(() => {
    setForm(generateVendorCategoryFormStepsConfig(initialData));
  }, [initialData]);

  // Redux States

  useEffect(() => {
    dispatch(getVendorCategory());
  }, []);

  const {
    category: vendorCategories,
    loading,
    error,
  } = useSelector((state) => state.vendorCategory);
  console.log(" ~ vendorCategory ~ vendorCategories112234:", vendorCategories);

  useEffect(() => {
    if (vendorCategories && vendorCategories.length > 0) {
      const mappedData = vendorCategories.map((data) => ({
        id: data?.id,
        vendorCategoryName: data?.vendorCategoryName,
        approvalStatus: data?.approvalStatus ? "Approved" : "Not approved",
        createdBy: data?.createdBy
          ? `${data?.createdBy?.firstName} ${data?.createdBy?.lastName}`
          : "NA",
        approvedBy: data?.approvedBy
          ? `${data?.approvedBy?.firstName} ${data?.approvedBy?.lastName}`
          : "NA",
        updatedBy: data?.updatedBy
          ? `${data?.updatedBy?.firstName} ${data?.updatedBy?.lastName}`
          : "NA",
        enabled: data?.enabled ? "Enabled" : "Not enabled",
      }));
      setCategoriesTableData(mappedData);
    }
  }, [vendorCategories]);

  console.log(" ~ vendorCategory ~ categoriesTableData:", categoriesTableData);

  const handleAddRowFormSubmit = async (data) => {
    const newCategory = {
      vendorCategoryName: "Added from Client 149",
      approvalStatus: session?.type === "admin" ? true : false,
      createdByUserID: session?.user?.id,
      approvedByUserID: session?.type === "admin" ? session?.user?.id : null,
      updatedByUserID: session?.user?.id,
      enabled: session?.type === "admin" ? true : false,
    };
    const newVendorCategoryResponse = await dispatch(
      createVendorCategory({ data: newCategory })
    );
    console.log(
      " ~ handleAddRowFormSubmit ~ newVendorCategoryResponse009:",
      newVendorCategoryResponse
    );
  };

  const handleEditRowFormSubmit = (data) => {};

  const handleDeleteRowData = (id) => {};

  return (
    <>
      <Seo title={"Vendor Category"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card_F_Width title={"Vendor Category List"}>
              <div className="table-responsive  deleted-table">
                {categoriesTableData.length > 0 && (
                  <DataTablesWithModalEdit
                    data={categoriesTableData}
                    columns={tableColumns}
                    title="My Vendor Category Table"
                    addButtonText="Add New Category"
                    formStepsConfig={form}
                    setInitialData={setInitialData}
                    setEditItemID={setEditItemID}
                    handleAddRowFormSubmit={handleAddRowFormSubmit}
                    handleEditRowFormSubmit={handleEditRowFormSubmit}
                    handleDeleteRowData={handleDeleteRowData}
                    key={categoriesTableData?.length}
                  />
                )}
              </div>
            </Card_F_Width>
          </Col>
        </Row>
        {/* <!-- row closed --> */}
      </React.Fragment>
    </>
  );
};

vendorCategory.layout = "Contentlayout";

export default vendorCategory;
