import React, { useRef, useState, useEffect } from "react";

import "./ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    } 
    props.onInput(pickedFile);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div>
      <input
        className="form-control-file"
        id={props.id}
        style={{ display: "none" }}
        ref={filePickerRef}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>Image Preview</p>}
        </div>
        <button
          className="btn btn-info"
          type="button"
          onClick={pickImageHandler}
        >
          PICK IMAGE
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
