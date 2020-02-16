let fs = require('fs');
let builder = require('xmlbuilder');

let languages = ['zh-cn', 'en-us', 'it-it', 'ja-jp', 'fr-fr', 'pt-br'];
let domain = 'https://community.wuhan2020.org.cn/';

let files = [];

var waitingCount = 0;

languages.forEach(function (lang) {
  ls(lang)
});

function ls(path) {
  waitingCount ++;

  fs.readdir(path, function(err, items) {
    items.forEach(function (item) {
      if (fs.lstatSync(path + "/" + item).isDirectory()) {
        ls(path + "/" + item)
      } else {
        if (!item.endsWith('json'))
          files.push(domain + path + "/" + item);
      }
    });

    waitingCount --;

    if (waitingCount === 0) {
      files.sort();

      xml();
    }
  });
}

function xml() {
  let root = builder.create('urlset', { encoding: 'utf-8' }).att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  for (var i = 0; i < files.length; i ++) {
    root.ele("url").ele("loc", files[i]);
  }

  let xml = root.end({ pretty: true});

  fs.writeFile("sitemap.xml", xml, function(err, result) {
    if (err) console.log('error', err);
    else console.log("sitemap.xml has been generated!");
  });
}
