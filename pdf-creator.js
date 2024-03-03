const fs = require("fs");
const PdfPrinter = require("pdfmake");

const createPDF = (dd, fonts, outputPath) => {
  const printer = new PdfPrinter(fonts);
  const pdfDoc = printer.createPdfKitDocument(dd);
  pdfDoc.pipe(fs.createWriteStream(outputPath));
  pdfDoc.end();
};

module.exports = { createPDF };
