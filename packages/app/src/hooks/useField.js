import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useDebugValue,
} from 'react';

export default ({ validator = () => null, initialValue = '', ...data }) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  useEffect(
    () => { 
      if (value.length > 0) {
        setIsDirty(true);
      }
    },
    [value],
  );
  const error = useMemo(
    () => validator(value),
    [value, validator],
  );
  const isValid = useMemo(
    () => !error,
    [error],
  );
  const handler = useCallback(
    ({ target: { value } }) => setValue(value),
    [setValue],
  );
  useDebugValue(
    `${data.id ? `${data.id}: ` : ''}${value} (${isValid})`
  );
  return { 
    value,
    isDirty,
    isValid,
    error,
    handler,
    ...data,
  };
}
