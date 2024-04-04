import React from "react";
import { Col, Row, Card, Badge, Button } from "react-bootstrap";
import { GrFavorite } from "react-icons/gr";
import Vector3 from "../assets/images/Vector-3.png";
import Product1 from "../assets/images/products/choco-almond2.png";

const Products = () => {
  return (
    <div className='Products'>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          padding: "2rem",
          marginTop: "2rem",
          color: "#461a0f",
        }}
      >
        Recently Viewed
      </h1>
      <Row style={{ marginLeft: "1rem" }}>
        <Col md={3}>
          <Card
            style={{
              width: "14rem",
              backgroundColor: " #FCE9E9",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Badge className='custom-badge'>Top Sales</Badge>
            <GrFavorite
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "11rem",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            />
            <img
              src={Vector3}
              alt='Vector 3'
              style={{
                zIndex: 1,
                width: "170px",
                marginLeft: "2rem",
                marginBottom: "1rem",
              }}
            />
            <Card.Img
              variant='top'
              src={Product1}
              style={{
                zIndex: 2,
                position: "absolute",
                width: "150px",
                height: "220px",
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            />
            <Card.Body>
              <Card.Title className='card-title'>
                Black Chocolate with Honey
              </Card.Title>
              <p className='weight-tag'>Weight: 100 g</p>
              <p className='price-tag'>105 $</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className='btn-chart'>Add to Chart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            style={{
              width: "14rem",
              backgroundColor: " #FCE9E9",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Badge className='custom-badge-2-1 '>Sale</Badge>
            <GrFavorite
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "11rem",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            />
            <img
              src={Vector3}
              alt='Vector 3'
              style={{
                zIndex: 1,
                width: "170px",
                marginLeft: "2rem",
                marginBottom: "1rem",
              }}
            />
            <Card.Img
              variant='top'
              src={Product1}
              style={{
                zIndex: 2,
                position: "absolute",
                width: "150px",
                height: "220px",
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            />
            <Card.Body>
              <Card.Title className='card-title'>
                Black Chocolate with Honey
              </Card.Title>
              <p className='weight-tag'>Weight: 100 g</p>
              <p className='price-tag'>105 $</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className='btn-chart'>Add to Chart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            style={{
              width: "14rem",
              backgroundColor: " #FCE9E9",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Badge className='custom-badge'>Top Sales</Badge>
            <GrFavorite
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "11rem",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            />
            <img
              src={Vector3}
              alt='Vector 3'
              style={{
                zIndex: 1,
                width: "170px",
                marginLeft: "2rem",
                marginBottom: "1rem",
              }}
            />
            <Card.Img
              variant='top'
              src={Product1}
              style={{
                zIndex: 2,
                position: "absolute",
                width: "150px",
                height: "220px",
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            />
            <Card.Body>
              <Card.Title className='card-title'>
                Black Chocolate with Honey
              </Card.Title>
              <p className='weight-tag'>Weight: 100 g</p>
              <p className='price-tag'>105 $</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className='btn-chart'>Add to Chart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card
            style={{
              width: "14rem",
              backgroundColor: " #FCE9E9",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Badge className='custom-badge'>Top Sales</Badge>
            <GrFavorite
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "11rem",
                marginTop: "1rem",
                cursor: "pointer",
              }}
            />
            <img
              src={Vector3}
              alt='Vector 3'
              style={{
                zIndex: 1,
                width: "170px",
                marginLeft: "2rem",
                marginBottom: "1rem",
              }}
            />
            <Card.Img
              variant='top'
              src={Product1}
              style={{
                zIndex: 2,
                position: "absolute",
                width: "150px",
                height: "220px",
                marginTop: "1rem",
                marginLeft: "2rem",
              }}
            />
            <Card.Body>
              <Card.Title className='card-title'>
                Black Chocolate with Honey
              </Card.Title>
              <p className='weight-tag'>Weight: 100 g</p>
              <p className='price-tag'>105 $</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button className='btn-chart'>Add to Chart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
