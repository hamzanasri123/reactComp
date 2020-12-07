import React, { Component } from "react";

import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const list = this.props.clothes.map((el) => {
      return (
        <div key={el.id} className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={el.image} alt={el.name} />

            <CardImgOverlay body className="ml-5">
              <CardTitle>{el.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{list}</div>
      </div>
    );
  }
}

export default MainComponent;
