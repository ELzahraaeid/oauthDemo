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
    axios.get('http://localhost:5000/').then((response) => {
      console.log({ Data: response.data });
    });
    // axios
    //   .get(
    //     'https://accounts.google.com/o/oauth2/auth?client_id=423447056352-ue6a6filllnmhn8bk2eone3o2i9jt97n.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Foauthdebugger.com%2Fdebug&scope=drive.file&response_type=code&response_mode=query&state=gosskfib4b&nonce=0bx88brdry2'
    //   )
    //   .then((response) => {
    //     console.log({ response, Data: response.data });
    //   });
    // axios
    //   .get('https://accounts.google.com/o/oauth2/auth', {
    //     mode: 'cors',
    //     referrerPolicy: 'no-referrer-when-downgrade',
    //     credentials: 'include',
    //     headers: {},
    //     params: {
    //       client_id:
    //         '348209554476-dcsr88aqge22ggsr18uqtkdtiofjkulb.apps.googleusercontent.com',
    //       redirect_uri: 'https://b514-197-39-224-23.ngrok-free.app',
    //       scope: 'https://www.googleapis.com/auth/photoslibrary.appendonly',
    //       response_type: 'code',
    //       response_mode: 'query',
    //       state: '8aqsa6owfc6',
    //       nonce: 'oibzzshunss',
    //     },
    //   })
    //   .then((response) => {
    //     console.log({ response, Data: response.data });
    //   });
    // axios({
    //   url: 'https://accounts.google.com/o/oauth2/auth?client_id=348209554476-dcsr88aqge22ggsr18uqtkdtiofjkulb.apps.googleusercontent.com&redirect_uri=https:%2F%2Fb514-197-39-224-23.ngrok-free.app&scope=https:%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary.appendonly&response_type=code&response_mode=query&state=8aqsa6owfc6&nonce=oibzzshunss',
    //   method: 'get',
    //   headers: {},
    //   referrerPolicy: 'no-referrer-when-downgrade',
    //   mode: 'cors',
    //   credentials: 'include',
    // });
    fetch(
      'https://accounts.google.com/o/oauth2/auth?client_id=348209554476-dcsr88aqge22ggsr18uqtkdtiofjkulb.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fb514-197-39-224-23.ngrok-free.app&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary.appendonly&response_type=code&response_mode=query&state=8aqsa6owfc6&nonce=oibzzshunss',
      {
        // headers: {
        //   'ngrok-skip-browser-warning': true,
        // },
        referrerPolicy: 'no-referrer-when-downgrade',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      }
    )
      .then((response) => {
        console.log({ response });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <div style={{ marginBottom: 40 }}>
        <label htmlFor="file" className="sr-only">
          Choose a file
        </label>
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
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

      {file && <button onClick={handleUpload}>Upload a file</button>}
    </>
  );
};

export default SingleFileUploader;

// fetch(
//   'https://accounts.google.com/o/oauth2/auth?client_id=348209554476-dcsr88aqge22ggsr18uqtkdtiofjkulb.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fb514-197-39-224-23.ngrok-free.app&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary.appendonly&response_type=code&response_mode=query&state=8aqsa6owfc6&nonce=oibzzshunss',
//   {
//     headers: {
//       accept:
//         'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//       'accept-language': 'en-US,en;q=0.9',
//       'sec-ch-ua':
//         '"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"',
//       'sec-ch-ua-arch': '"x86"',
//       'sec-ch-ua-bitness': '"64"',
//       'sec-ch-ua-full-version': '"117.0.5938.132"',
//       'sec-ch-ua-full-version-list':
//         '"Google Chrome";v="117.0.5938.132", "Not;A=Brand";v="8.0.0.0", "Chromium";v="117.0.5938.132"',
//       'sec-ch-ua-mobile': '?0',
//       'sec-ch-ua-model': '""',
//       'sec-ch-ua-platform': '"Linux"',
//       'sec-ch-ua-platform-version': '"5.15.0"',
//       'sec-ch-ua-wow64': '?0',
//       'sec-fetch-dest': 'document',
//       'sec-fetch-mode': 'navigate',
//       'sec-fetch-site': 'cross-site',
//       'sec-fetch-user': '?1',
//       'upgrade-insecure-requests': '1',
//       'x-chrome-id-consistency-request':
//         'version=1,client_id=77185425430.apps.googleusercontent.com,device_id=c2dfadec-0574-4a8d-96e4-f7f70edea74e,sync_account_id=102544692358511845473,signin_mode=all_accounts,signout_mode=show_confirmation',
//       'x-client-data':
//         'CIi2yQEIo7bJAQipncoBCK3dygEIk6HLAQid/swBCPiYzQEIh6DNAQjoxc0BCLnKzQE=',
//     },
//     referrer: 'https://oauthdebugger.com/',
//     referrerPolicy: 'no-referrer-when-downgrade',
//     body: null,
//     method: 'GET',
//     mode: 'cors',
//     credentials: 'include',
//   }
// );
