import React, { Component } from 'react'
import {ListGroup,ListGroupItem} from 'reactstrap'
export default class ProductList extends Component {
 
  render() {
    return (
      <div>
        <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
        <ListGroup>
          <ListGroupItem>çöp kovası</ListGroupItem>
          <ListGroupItem>telefon</ListGroupItem>
          <ListGroupItem>ayakkabı</ListGroupItem>
          <ListGroupItem>bardak</ListGroupItem>
          <ListGroupItem>kalem</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
