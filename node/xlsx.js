// var xlsx = require('node-xlsx').default;
// var fs = require('fs')

// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));
// Parse a file
// const workSheetsFromFile = xlsx.parse(`${__dirname}/a.xlsx`);
// console.log(JSON.stringify(workSheetsFromFile))

// const data = [[1, 2, 33333], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
// var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer

// fs.writeFile("a.xlsx", buffer,  "binary",function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("The file was saved!");
//     }
// });