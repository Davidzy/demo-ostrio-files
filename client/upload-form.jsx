import React from 'react';

export default class UploadForm extends React.Component {
  constructor() {
    super();
    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false,
      fileName: ''
    }
    this.changeFileInput = this.changeFileInput.bind(this);
  }
  changeFileInput(e) {
    e.preventDefault();
    let self = this;
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      var file = e.currentTarget.files[0];
      if (file) {
        console.log(file);
        var uploadInstance = Images.insert({
          file: file,
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);
        self.setState({
          uploading: uploadInstance, // Keep track of this instance to use below
          inProgress: true, // Show the progress bar now
          fileName: file.name
        });
        uploadInstance.on('start', function () {
          console.log('Starting');
        });
        uploadInstance.on('end', function (error, fileObj) {
          console.log('On end File Object: ', fileObj);
        });
        uploadInstance.on('uploaded', function (error, fileObj) {
          console.log('uploaded: ', fileObj);
          // self.refs['fileinput'].value = '';
          self.setState({
            uploading: [],
            progress: 0,
            inProgress: false,
            fileName: ''
          });
        });
        uploadInstance.on('error', function (error, fileObj) {
          console.log('Error during upload: ' + error);
        });
        uploadInstance.on('progress', function (progress, fileObj) {
          console.log('Upload Percentage: ' + progress);
          // Update our progress bar
          self.setState({
            progress: progress
          })
        });
        uploadInstance.start();
      }
    }
  }
  render() {
    let currentUpload = this.state.inProgress;
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
          <input type="file" disabled={this.state.inProgress} ref="fileinput" onChange={this.changeFileInput}/>
          <p>
            <small>Upload file in <code>jpeg</code> or <code>png</code> format,
            with size less or equal to 10MB</small>
          </p>
        </div>
      )
    }
  }
}
