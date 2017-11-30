import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'dreamhousesf';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dreamhousesf/upload';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: '',
      err:[]
    };
  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
        this.setState({err:err});
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleSubmit(){
    return (e)=>{
      e.preventDefault();
      this.props.createPicture(this.props.match.params.projectId,
        {image_url:this.state.uploadedFileCloudinaryUrl})
        .then(this.props.closeModal())
        .then(this.fetchPictures);
    };
  }

  render() {
    let err;
    if (this.state.err){
      err = this.state.err;
    }
    return(
      <div>
        <form className="new-pic-form"onSubmit={this.handleSubmit()}>
          <div className="FileUpload">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </div>
          <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
            <div className="loaded">
              <img className="pic-preview" src={this.state.uploadedFileCloudinaryUrl} />
              <p>{this.state.uploadedFile.name}</p>
              <button type="submit" > Add Picutre </button>
              <p>{err}</p>
            </div>}
          </div>
        </form>
      </div>
    );
  }
}


export default ImageUpload;
