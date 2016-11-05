import React from 'react';
import UploadForm from './upload-form';
import DisplayUploadedFiles from './display-uploaded-files';

export default class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <UploadForm />
        <DisplayUploadedFiles />
      </div>
    )
  }
}
