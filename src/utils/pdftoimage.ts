const fs = require('fs');
const axios = require('axios');
const { fromPath } = require('pdf2pic');
const path = require('path');

// Function to download the PDF file
const downloadPdf = async (url:any, dest:any) => {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  const writer = fs.createWriteStream(dest);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

// Function to convert PDF to images
const pdfToImage = async (pdfPath:any, options:any) => {
  const converter = fromPath(pdfPath, options);
  const result = await converter.bulk(-1, true); // Convert all pages
  return result;
};

module.exports = {
  downloadPdf,
  pdfToImage,
};
