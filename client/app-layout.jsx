import React from 'react';
import UploadForm from './upload-form';
import AppContainer from './app-container';

export default class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <UploadForm />
        <AppContainer />
      </div>
    )
  }
}
