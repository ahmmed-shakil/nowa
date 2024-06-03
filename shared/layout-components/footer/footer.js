import React from 'react';
import { Col } from 'react-bootstrap';
import Link from "next/link";

export default function Footer() {
return (
    <div className="main-footer">
    <Col md={12} sm={12} className=" text-center">
        <div className="container-fluid pt-0 ht-100p">
          Copyright © 2023{" "}
          <Link href="#!" className="text-primary">
            nowa
          </Link>
          . Designed with <span className="fa fa-heart text-danger"></span> by
          <Link href="#!"> Spruko </Link> All rights reserved
        </div>
      </Col>
    </div>
);}




