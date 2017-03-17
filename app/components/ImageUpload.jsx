import React from 'react';
import Dropzone from 'react-dropzone';


const ImageUpload = React.createClass({

  onImageDrop(files) {
    this.props.Upload(files);
  },

  render() {
    return(
      <div>
        <Dropzone
          multiple={true}
          accept="image/*"
          onDrop={this.onImageDrop} className="drop">
          <p className="title-drag-and-drop">Drag and Drop a image <br/>or<br/>click to select a file to upload and create card</p>
        </Dropzone>
      </div>
    )
  }
});

export default ImageUpload;