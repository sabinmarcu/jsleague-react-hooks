import React from 'react';
import { 
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Avatar,
  Button,
} from '@material-ui/core';

import TextField from './TextField';
import useFocus from '../hooks/useFocus';
import { useAppFields } from '../hooks/useApp';
import styles from "./style.module.css";

export default ({
  id,
  focusable = false,
}) => {
  const { isFocus, focus, blur } = useFocus();
  const fields = useAppFields();
  return (
    <Card raised={focusable && isFocus} className={[styles.card, id].join(" ")}>
      <CardContent className={styles.fieldList}>
        {fields.map(field => (
          <TextField key={field.id} {...field} onFocus={focusable && focus} onBlur={focusable && blur} />
        ))}
      </CardContent>
    </Card>
  );
}