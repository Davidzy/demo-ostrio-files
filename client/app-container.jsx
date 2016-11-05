import React from 'react';
import { createContainer } from 'meteor/react-meteor-data'
import DisplayUploadedFiles from './display-uploaded-files';

export default createContainer(() => {
  const images = Images.find().fetch();
  return {
    images
  };
}, DisplayUploadedFiles);
