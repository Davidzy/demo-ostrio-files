import React from 'react';

export default class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUpload: false,
      fileName: ''
    }
    this.changeFileInput = this.changeFileInput.bind(this);
  }
  changeFileInput(e) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var file = e.currentTarget.files[0];
      if (file) {
        console.log(file);
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        uploadInstance.on('start', () => {
          this.setState({
            currentUpload: this,
            fileName: file.name
          });
        });

        uploadInstance.on('end', (error, fileObj) => {
          if (error) {
            alert('Error during upload: ' + error.reason);
          } else {
            alert('File "' + fileObj.name + '" successfully uploaded');
          }
          this.setState({
            currentUpload: false
          })
        });

        uploadInstance.start();
      }
    }
  }
  render() {
    let currentUpload = this.state.currentUpload;
    if (currentUpload) {
      return (
        <div>
          Uploading <b>{this.state.fileName}</b>
        </div>
      )
    }
    else {
      return (
        <div>
          <input type="file" ref="fileInput" onChange={this.changeFileInput}/>
          <p>
            <small>Upload file in <code>jpeg</code> or <code>png</code> format,
            with size less or equal to 10MB</small>
          </p>
        </div>
      )
    }
  }
}
