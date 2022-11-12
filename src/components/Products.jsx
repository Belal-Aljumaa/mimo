import React from "react";
import { Zoom } from "react-awesome-reveal";
import { Card, Col, Row } from "react-bootstrap";


function Products({ itemsData }) {
  return (
    <Row xs="1" md="2" className="g-4">
      <Zoom>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col>
                <Card className="d-flex flex-row">
                  <Card.Img
                    style={{ maxWidth: "150px", maxHeight: "150px" }}
                    variant="top"
                    src="https://placehold.jp/3d4070/ffbb00/150x150.png"
                  />
                  <Card.Body>
                    <Card.Title className="my-2 d-flex justify-content-between">
                      <div className="fs-3">{item.title}</div>
                      <div className="fs-4">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="text-muted mt-3">
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">There are no dishes</h3>
        )}
      </Zoom>
    </Row>
  );
}

export default Products;
