const chunkSize = 14;
const cellWidth = 28;

const createLines = (array) => {
  const _array = array.reduce((acc, cur) => {
    const line = cur[0] + "\n" + "\n" + cur[1] + "\n" + cur[2];
    acc.push(line);
    return acc;
  }, []);
  return _array;
};

const createTable = (array) => {
  const body = [];
  const widths = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    body.push(chunk);
  }

  for (let i = 0; i < chunkSize; i++) {
    widths.push(cellWidth);
  }

  const table = {
    content: {
      style: "tableExample",
      table: {
        widths: widths,
        heights: 70,
        body: body,
      },
      alignment: "center",
      bold: true,
    },
  };
  return table;
};

const createDD = (array) => {
  const lines = createLines(array);
  const table = createTable(lines);

  return table;
};

module.exports = {
  createDD,
};
