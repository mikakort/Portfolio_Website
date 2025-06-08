const https = require('https');
const fs = require('fs');
const path = require('path');

const fontUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/Inter_Regular.json';
const fontPath = path.join(__dirname, 'public', 'fonts', 'inter_regular.json');

https
  .get(fontUrl, (response) => {
    const file = fs.createWriteStream(fontPath);
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Font file downloaded successfully');
    });
  })
  .on('error', (err) => {
    console.error('Error downloading font file:', err);
  });
