import React from 'react';
import { Box } from 'rebass';

export default ({ children, style }) => (
  <Box
    sx={{
      color: 'rgba(0, 0, 0, 1)',
      ...style,
    }}
  >
    {children}
  </Box>
);
