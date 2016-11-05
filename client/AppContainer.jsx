import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import DisplayUploadedFiles from './display-uploaded-files';

export default AppContainer = createContainer(() => {
  return {
    images: Tasks.find({}).fetch(),
  };
}, DisplayUploadedFiles);
