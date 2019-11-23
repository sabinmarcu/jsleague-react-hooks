import { useState, useCallback } from 'react';

export default (initialValue = false) => {  
  const [isFocus, setIsFocus] = useState(initialValue);
  const focus = useCallback(() => setIsFocus(true), [setIsFocus]);
  const blur = useCallback(() => setIsFocus(false), [setIsFocus]);
  return { isFocus, focus, blur };
}