import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
export default class App extends Component {
  state = {currentCategory: "" }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {

    let productInfo = { title: "Product List" };
    let categoryInfo={title: "Category List"};
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                info={categoryInfo}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList 
               currentCategory={this.state.currentCategory}
              info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
