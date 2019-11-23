#!/usr/bin/env node


const fs = require('fs');
const path = require('path');


const wikiDir = path.resolve(__dirname, '../wiki');

const getFiles = folder => (dir => fs
  .readdirSync(dir)
  .filter(it => it.endsWith('md'))
  .filter(it => !it.match(/(Home|_Sidebar)\.md/))
  .map(file => path.resolve(dir, file))
)(path.resolve(wikiDir, folder));


const clean = folder => 
  getFiles(folder)
    .map(file => {
      const content = fs.readFileSync(file, 'utf-8')
        .replace(/import[^\;]+\;\n*/g, "")
        .replace(/export[^\;]+\;\n*/g, "")
        .replace(/<\/?[A-Z][^\/>]+\/?>/g, "")
        .replace(/<\/?[A-Z][^>]+\/?>/g, "");
      fs.writeFileSync(
        file,
        content,
      );
    });

clean('slides');
clean('exercises');