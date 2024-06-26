import React from 'react';
import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import ReactCompareImage from "react-compare-image";
import img1 from "../../../public/assets/img/photos/compare1.jpg";
import img2 from "../../../public/assets/img/photos/compare2.jpg";
import Seo from '@/shared/layout-components/seo/seo';

const Imagecompare = () => (
  <div>
    <Seo title={"Image-compare"}/>
    {/* <!-- breadcrumb --> */}
    <div className="breadcrumb-header justify-content-between">
      <div className="left-content">
        <span className="main-content-title mg-b-0 mg-b-lg-1">
          IMAGE COMPARISION
        </span>
      </div>
      <div className="justify-content-center mt-2">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item className="breadcrumb-item tx-15" href="#!">
            Apps
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="breadcrumb-item "
            active
            aria-current="page"
          >
            Image-compare
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
    {/* <!-- /breadcrumb --> */}

    {/* <!-- Row --> */}
    <Row>
      <Col sm={12} md={12} lg={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Horizontal Image Comparision
            </div>
            <p className="mg-b-20">
              Example of nowa Horizontal Image Comparision.
            </p>
            <div className="twentytwenty-container"><ReactCompareImage leftImage={img1.src} rightImage={img2.src}  /></div>
          </Card.Body>
        </Card>
        {/* <!-- div --> */}

        {/* <!-- div --> */}
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Vertical Image Comparision
            </div>
            <p className="mg-b-20">
              Example of nowa Vertical Image Comparision.
            </p>
            <div className="twentytwenty-container" data-orientation="vertical">
            <ReactCompareImage leftImage={img1.src} rightImage={img2.src} vertical="true" />
            </div>
          </Card.Body>
        </Card>
        {/* <!-- div --> */}
      </Col>
    </Row>
  </div>
);

Imagecompare.propTypes = {};

Imagecompare.defaultProps = {};

Imagecompare.layout = "Contentlayout"

export default Imagecompare;
