import React, { useState, useEffect } from "react";
import { storage } from "../firebase";

const UploadImage = ({ setUrl }) => {
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
      {image ? (
        <div>
          <button onClick={handleUpload}>Upload</button>
          <progress value={progress} max="100" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UploadImage;