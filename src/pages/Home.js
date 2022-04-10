import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Container } from "react-bootstrap";
import Posts from "../components/Posts";
import { getPosts } from "../store/posts/actions";

export default function Home() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container className="home">
      <Posts />
    </Container>
  );
}
