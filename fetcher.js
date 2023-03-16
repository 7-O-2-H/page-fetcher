const requestedSite = process.argv[2].toString();
const requestedPath = process.argv[3].toString()
const request = require('request');
const fs = require('fs');

const pageDownloader = function (url, localPath) {

  request(url, (error, response, body) => {
    if (error) {
      console.log(error);

      return;
    }
  fs.writeFile(localPath, body, (error) => {
    if(error) {
      console.log(error);
      return;
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  })

});

};

pageDownloader(requestedSite, requestedPath);