import React from 'react';

export default class SingleImage extends React.Component {
  removeFile(e) {
    e.preventDefault();
    Meteor.call('file.remove', this.props.file._id);
  }
  render() {
    const file = this.props.file;
    const link = Images.findOne({_id: file._id}).link();
    return (
      <li>
        <a href={link+"?download=true"} download="{this.props.file.name}">
          {this.props.file.name}</a><br/>
        <img src={link} height="300" width="200"/>
        <button onClick={this.removeFile.bind(this)}>Remove</button>
      </li>
    )
  }
}
