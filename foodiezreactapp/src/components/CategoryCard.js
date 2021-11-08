import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Link to={`/categories/${category.slug}`}>
          <Card.Img variant="top" src={category.image} alt={category.name} />
        </Link>
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CategoryCard;
