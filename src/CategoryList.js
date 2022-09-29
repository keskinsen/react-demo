import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
export default class CategoryList extends Component {
  
    state = {
      categories: [
        { categoryId: 1, categoryName: "Bath" },
        { categoryId: 2, categoryName: "Electronic" },
        { categoryId: 3, categoryName: "Cloths" },
        { categoryId: 4, categoryName: "Kitchen" },
        { categoryId: 5, categoryName: "School" },
      ],
    };
   
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={()=>this.props.changeCategory(category)} key=
            {category.categoryId}>{category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
