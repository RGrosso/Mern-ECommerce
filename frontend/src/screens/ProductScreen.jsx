import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id);

    return (
        <>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p className="mb-0">Price : £{product.price}</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p className="mb-0">Description : £{product.description}</p>
                    </ListGroup.Item>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <p className="mb-0">Price:</p>
                                    </Col>
                                    <Col>
                                        <p className="mb-0">
                                            <strong>£{product.price}</strong>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="mb-0">Status:</p>
                                    </Col>
                                    <Col>
                                        <p className="mb-0">{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
