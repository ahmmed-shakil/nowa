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
import { AdminPermissionTable } from "@/shared/data/app/admin/adminpermissiontable";
import BreadcrumbCustom from "@/components/BreadcrumbCustom/Breadcrumb";

const Permissions = () => {
  const navigate = useRouter();

  const { status } = useSession();

  // useEffect(() => {
  //   if (status && status === "unauthenticated") {
  //     navigate.push("/");
  //   }
  // }, [status]);

  return (
    <>
      <Seo title={"Permissions1"} />
      <React.Fragment>
        <BreadcrumbCustom />

        {/* <!-- /breadcrumb --> */}

        {/* <!-- row --> */}
        <Row className=" row-sm">
          <Col lg={12}>
            <Card className="custom-card">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-3">
                    Admin Permission List
                  </h6>
                </div>
                <div className="table-responsive  deleted-table">
                  <AdminPermissionTable />
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

Permissions.layout = "Contentlayout";

export default Permissions;
