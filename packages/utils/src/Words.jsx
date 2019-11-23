import React from 'react';
import { Box } from 'rebass';

export default ({
  children,
  style,
  highlight,
  maxWidth = 500,
}) => (
  <Box
    sx={{
      color: highlight ? 'rgba(0, 0, 0, 0.6)' : 'inherit',
      fontSize: 16,
      lineHeight: '24px',
      textAlign: 'center',
      opacity: 0.7,
      maxWidth,
      padding: '15px 20px',
      ...style,
    }}
  >
    {children}
  </Box>
);
