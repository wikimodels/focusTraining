const { createPDF } = require("./pdf-creator");
const { fonts } = require("./utils/fonts");
const { createArray } = require("./utils/alphabet");
const { createDD } = require("./utils/document");
const cellsNumber = 140;

const array = createArray(cellsNumber);

const DD = createDD(array);

createPDF(DD, fonts(), "./фокус-7.pdf");
