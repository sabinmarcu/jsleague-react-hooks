#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../');
const SLIDES = path.resolve(ROOT, 'slides');

let output = fs.readdirSync(SLIDES)
  .filter(file => file.endsWith('.mdx'))
  .sort()
  .map(file => {
    const content = fs.readFileSync(path.resolve(SLIDES, file), 'utf-8');

    const titleMatch = content.match(/<!--\s+TITLE:\s+([a-zA-Z0-9-, ]*[a-zA-Z0-9])\s+-->/);
    const title = titleMatch ? titleMatch[1] : null;
    const subtitleMatch = content.match(/<!--\s+SUBTITLE:\s+([a-zA-Z0-9-, ]*[a-zA-Z0-9])\s+-->/);
    const subtitle = subtitleMatch ? subtitleMatch[1] : null;

    let sep = '';
    const rep = [];
    if (title) {
      sep += `<SectionTitle>${title}</SectionTitle>\n`;
      rep.push(titleMatch[0]);
    }
    if (subtitle) {
      sep += `<SectionSubtitle>${subtitle}</SectionSubtitle>\n`;
      rep.push(subtitleMatch[0]);
    } else {
      sep += '<SectionSubtitle />\n';
    }

    const newContent = `
${sep}
${content
        .replace(new RegExp(`(${rep.join('|')})`), '')
        .replace(/-{3,}/g, `---\n\n${sep}`)
      }
`;
    return newContent;
  }).join('\n\n---\n\n');

fs.writeFileSync(path.resolve(ROOT, 'decks/index.mdx'), output);