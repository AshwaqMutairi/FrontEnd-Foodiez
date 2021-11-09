import CategoryCard from "./CategoryCard";
import { useState } from "react";
import CategoryModal from "./CategoryModal";
import { observer } from "mobx-react";
import categoryCateg from "../categs/categoryCateg";
import { Form, Row, Stack } from "react-bootstrap";

function CategoryList() {
  const [query, setQuery] = useState("");

  const categoryList = categoryCateg.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryCard key={category._id} category={category} />);

  return (
    <div>
      <h1 className="title">Categories</h1>
      <Stack direction="horizontal" gap={3}>
        {/* <Form.Control
          className="m-2"
          placeholder="Search for category by name"
          onChange={(event) => setQuery(event.target.value)}
        /> */}
        <CategoryModal />
      </Stack>

      <Row>{categoryList}</Row>
    </div>
  );
}

// export default observer(CategoryList);
export default CategoryList;
