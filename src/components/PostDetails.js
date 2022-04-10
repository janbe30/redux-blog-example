import React from "react";
import { useSelector } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";
import { Bars } from "react-loader-spinner";

export default function PostDetails() {
  const { post, loadingPostDetails } = useSelector(
    (state) => state.PostReducer
  );

  return (
    <Container>
      {loadingPostDetails ? (
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
        <Row className="posts">
          <Col lg={8} md={10} sm={12}>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
          </Col>
        </Row>
      )}
    </Container>
  );
}
