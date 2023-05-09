const path = require('path')

console.log(path.sep);   //   o/p : \

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);   // o/p : \content\subfolder\test.txt


const base = path.basename(filePath)
console.log(base) // o/p :  test.txt


const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute); // o/p : C:\Users\subasrii\Desktop\tutorial\content\subfolder\test.txt