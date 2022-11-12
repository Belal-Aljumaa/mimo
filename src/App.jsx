import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Category from "./components/Category";
import Products from "./components/Products";
import { items } from "./Data";

function App() {
  const [itemsData, setItemsData] = useState(items);

  const allCategory = ["All", ...new Set(items.map((e) => e.category))];

  const filterCategory = (category) => {
    if (category == "All") {
      setItemsData(items);
    } else {
      const newArray = items.filter((item) => item.category == category);
      setItemsData(newArray);
    }
  };

  const filterSearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.category.toLowerCase() === word);
      setItemsData(newArr);
    }
  };
  return (
    <div className="app">
      <NavBar filterSearch={filterSearch} />
      <Landing />
      <Container>
        <h1 className="text-center my-5 border-bottom border-warning pb-2">
          Online Menu Of Mimo Pizza & Döner
        </h1>
        <Category filterCategory={filterCategory} allCategory={allCategory} />
        <Products itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
