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
import styles from "./style.module.css";

export default ({
  id,
  focusable = false,
}) => {
  return (
    <Card raised={false} className={[styles.card, id].join(" ")}>
      <CardContent className={styles.fieldList}>
      </CardContent>
    </Card>
  );
}