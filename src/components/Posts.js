import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Card, Container, Row, Col } from "react-bootstrap";
import { Bars } from "react-loader-spinner";

export default function Posts() {
  const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
  return (
    <Container>
      {loadingPosts ? (
        <div className="loader">
          <Bars
            heigth="100"
            width="100"
            ariaLabel="loading-indicator"
            color="#00BFFF"
            timeout={3000} // 3 secs
          />
        </div>
      ) : (
        posts.map((item, index) => {
          // item properties from the API obj
          return (
            <Row className="posts" key={index}>
              <Col lg={8} md={10} sm={12}>
                <Link to={`/${item.id}`}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.body}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </Row>
          );
        })
      )}
    </Container>
  );
}
