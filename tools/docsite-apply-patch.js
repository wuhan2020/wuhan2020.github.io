// 以后在优化吧
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
docsitePath = path.join(__dirname, '..', 'node_modules/docsite/node_modules');
console.log('remove react in docsite');
rimraf(path.join(docsitePath, 'react'), (err) => {
  if (err) {
    console.log(err)
  }
});
rimraf(path.join(docsitePath, 'react-dom'), (err) => {
  if (err) {
    console.log(err)
  }
});
fs.unlinkSync(path.join(__dirname, '..', 'node_modules/docsite/lib/build.js'));
fs.unlinkSync(path.join(__dirname, '..', 'node_modules/docsite/lib/generateHTMLFile.js'));
fs.unlinkSync(path.join(__dirname, '..', 'node_modules/docsite/lib/generateJSONFile.js'));

function copyFile(src, dist) {
  fs.writeFileSync(dist, fs.readFileSync(src));
}

copyFile(path.join(__dirname, 'docsite/build.js'), path.join(__dirname, '..', 'node_modules/docsite/lib/build.js'));
copyFile(path.join(__dirname, 'docsite/start.js'), path.join(__dirname, '..', 'node_modules/docsite/lib/start.js'));
copyFile(path.join(__dirname, 'docsite/generateHTMLFile.js'), path.join(__dirname, '..', 'node_modules/docsite/lib/generateHTMLFile.js'));
copyFile(path.join(__dirname, 'docsite/generateJSONFile.js'), path.join(__dirname, '..', 'node_modules/docsite/lib/generateJSONFile.js'));
