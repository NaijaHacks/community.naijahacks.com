import * as React from "react";
import { Form, Col } from "react-bootstrap";
import './FilterBox.css';

const FilterBox = () => {
  return (
    <>
      <section className="filter-box shadow-sm rounded bg-white p-3">
        <p className="text-muted text-left">Filter</p>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="category">
            <Form.Control as="select">
                <option>Category</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="city">
              <Form.Control as="select">
                <option>City</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="status">
              <Form.Control as="select">
                <option>Status</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

          </Form.Row>
          <Form.Group controlId="rating">
            <Form.Label className="text-left form-label col pl-0 text-muted">Rating</Form.Label>
            <Form.Control type="range" style={{ border: 0 }} className="p-0 m-0" />
          </Form.Group>

        </Form>
      </section>
    </>
  );
};

export default FilterBox;
