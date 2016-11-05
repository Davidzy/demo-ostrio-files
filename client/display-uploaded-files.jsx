import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import SingleImage from './single-image';

export default class DisplayUploadedFiles extends React.Component {
  // getImages() {
  //   return [{
  //     _id: 1,
  //     name: "David",
  //     link: "http://placehold.it/150x150"
  //   }]
  // }
  renderImages() {
    return (
      this.props.images.map((image) => (
        <SingleImage key={image._id} file={image} />
      ))
    )
  }
  render() {
    let count = this.props.images.length;
    if (count > 0) {
      return (
        <ul>
          {this.renderImages()}
        </ul>
      )
    } else {
      return (
        <div>No files uploaded, yet</div>
      )
    }
  }
}
