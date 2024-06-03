import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Breadcrumb } from "react-bootstrap";

const BreadcrumbCustom = () => {
  const router = useRouter();
  const { pathname } = router;
  const Breadcrumbs = pathname
    .split("/")
    .filter((item) => item !== "")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1));
  const title = Breadcrumbs.shift();
  const lowerCaseTitle = title.toLowerCase();
  return (
    <>
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">{title}</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb>
            <Breadcrumb.Item
              className=" tx-15"
              // href={`/${lowerCaseTitle}`}
            >
              {title}
            </Breadcrumb.Item>
            {Breadcrumbs.map((breadcrumb, index) => (
              <Breadcrumb.Item active aria-current="page" key={index}>
                {breadcrumb}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbCustom;
