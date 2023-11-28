import React, { useState } from 'react';
import axios from 'axios';
const SingleFileUploader = () => {
  //   const [file, setFile] = (useState < File) | (null > null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    window.location.href =
      'https://accounts.google.com/o/oauth2/auth?client_id=348209554476-dcsr88aqge22ggsr18uqtkdtiofjkulb.apps.googleusercontent.com&redirect_uri=https%3A%2F%2F7ced-197-39-178-7.ngrok-free.app&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary.appendonly&response_type=code&response_mode=query&state=8aqsa6owfc6&nonce=oibzzshunss';
  };

  return (
    <>
      <div style={{ marginBottom: 40 }}></div>
      {/* {file && (
        <section>
          File details:
          <ul>
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )} */}

      {<button onClick={handleUpload}>Connect with google phote</button>}
    </>
  );
};

export default SingleFileUploader;
