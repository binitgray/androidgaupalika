import path from 'path';
import fs from 'fs';

const convert= async(path:any) => {


  const pdfFilename = `downloaded.pdf`;
  const pdfPath = path.join(process.cwd(), 'public', pdfFilename);

  try {
    debugger
    await downloadPdf(path, pdfPath);

    const options = {
      density: 100,
      saveFilename: 'converted',
      savePath: path.join(process.cwd(), 'public', 'images'),
      format: 'png',
      width: 600,
      height: 800,
    };

    const images = await pdfToImage(pdfPath, options);

    // Clean up the downloaded PDF
    // fs.unlinkSync(pdfPath);
    return images

  } catch (error) {
    
  }
};
export default convert
