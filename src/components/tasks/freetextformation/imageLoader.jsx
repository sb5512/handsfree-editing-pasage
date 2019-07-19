import React, { Component } from "react";
import Utils from "../../../utils/Utils";

class ImageLoader extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    // To get random images - Begins
    let totalImages = 4;
    let imageNumber = this.props.imageNumber % totalImages; //Utils.getRandomInt(4);
    let toLoadImage = require(`../../../fixtures/image${imageNumber}.jpg`);
    // To get random images - Ends
    return (
      <React.Fragment>
        {/* For Image */}
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
            <img
              src={toLoadImage}
              className="img-fluid img-thumbnail"
              alt="freetext"
            />
          </div>
        </div>
        <br />
        {/* For Image Ends*/}
      </React.Fragment>
    );
  }
}

export default ImageLoader;
