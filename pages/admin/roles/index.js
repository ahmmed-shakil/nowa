import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Seo from "@/shared/layout-components/seo/seo";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import {
  Breadcrumb,
  Col,
  Row,
  Card,
  Button,
  ProgressBar,
  Form,
} from "react-bootstrap";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Savetable } from "@/shared/data/table/Addrows";
import { AdminRolesTable } from "@/shared/data/app/admin/adminrolestable";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";

const AdminRoles = () => {
  const navigate = useRouter();

  const { status } = useSession();

  // useEffect(() => {
  //   if (status && status === "unauthenticated") {
  //     navigate.push("/");
  //   }
  // }, [status]);

  return (
    <>
      <Seo title={"Admin Roles"} />
      <React.Fragment>
        <BreadcrumbCustom />
        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card className="custom-card">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">Admin Role List</h6>
                  {/* <p className="text-muted card-sub-title">
                    Responsive is an extension for DataTables that resolves that
                    problem by optimising the {`table's`} layout for different
                    screen sizes through the dynamic insertion and removal of
                    columns from the table.
                  </p> */}
                </div>
                <div className="table-responsive  deleted-table">
                  <AdminRolesTable />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- row closed --> */}
      </React.Fragment>
    </>
  );
};

AdminRoles.layout = "Contentlayout";

export default AdminRoles;
