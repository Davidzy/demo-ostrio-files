import React from 'react';

export default class SingleImage extends React.Component {
  render() {
    const file = this.props.file;
    const link = Images.findOne({_id: file._id}).link();
    return (
      <li>
        <a href={link+"?download=true"} download="{this.props.file.name}">
          {this.props.file.name}</a>
      </li>
    )
  }
}
