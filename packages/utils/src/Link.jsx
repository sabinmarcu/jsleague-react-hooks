import React from 'react';
import { useDeck } from 'mdx-deck';
import { moveTo } from './utils';

export default ({
  children,
  noColor,
  href,
  style,
}) => {
  const state = useDeck();
  const linkMatch = href && href.match(/slide:([0-9]+)/);
  const link = linkMatch ? linkMatch[1] : href;
  return (
    <a
      as="span"
      href={!linkMatch && link}
      onClick={linkMatch && (() => moveTo({ ...state, index: link }))}
      style={{
        color: noColor ? 'inherit' : '#106bcc',
        fontSize: 30,
        textDecoration: 'none',
        cursor: 'pointer',
        ...style,
      }}
    >
      {children}
    </a>
  );
};
