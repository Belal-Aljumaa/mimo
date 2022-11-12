import React from "react";
import { Button, Col, Row } from "react-bootstrap";


export const Category = ({ filterCategory, allCategory }) => {
  const onFilter = (filter) => {
    filterCategory(filter);
  };
  return (
    <Row className="my-2 mb-5">
      <Col className="d-flex justify-content-center">
          {allCategory.length >= 1
            ? allCategory.map((e) => {
                return (
                  <div>
                    <Button
                      className="mx-1 fs-3"
                      variant="outline-warning"
                      onClick={() => onFilter(e)}
                    >
                      {e}
                    </Button>
                  </div>
                );
              })
            : null}
      </Col>
    </Row>
  );
};

export default Category;
