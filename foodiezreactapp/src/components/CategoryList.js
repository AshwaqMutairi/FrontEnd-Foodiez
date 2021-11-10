import React, { useState } from "react";
import CategoryItem from "./CategoryItem";
// import { Button } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
// add cat modal

function CategoryList() {
  //   const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  //   const closeModal = () => setIsOpen(false);
  //   const openModal = () => setIsOpen(true);

  const categories = categoryStore.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem category={category} />);

  return (
    <div>
      <br />
      <p className="search">
        {/* <Button className="add-button" variant="info" onClick={openModal}>
          Add Category
        </Button> */}
        <SearchBar setQuery={setQuery} />{" "}
      </p>

      {/* <AddCategoryModal isOpen={isOpen} closeModal={closeModal} /> */}
      <div className="col-md-auto text-center list">{categories}</div>
    </div>
  );
}

export default observer(CategoryList);
