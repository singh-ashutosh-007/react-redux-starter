import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // Since a separate spreadsheet is only utilized for the production build need to dynamically
  console.log('Appending style'.blue);
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  console.log('Writing index.html');
  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }

    console.log('index.html written to /dist'.green);
  });
});
