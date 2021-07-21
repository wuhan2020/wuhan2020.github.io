const path = require('path');
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
