import React from 'react';
import { 
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
} from '@material-ui/core';
import marked from 'marked';

import useFocus from "../hooks/useFocus";
import styles from './style.module.css';

export default ({
  focusable = false,
  id,
  name = "Preview Component",
  email = "test@example.com",
  avatar = "//placekitten.com/50/50",
  cover = "//placekitten.com/600/300",
  bio = "# This is just a preview!\n\nSend the following props to build content:\n\n```js\n{ title, avatar, cover, content }\n```"
}) => {
  const {isFocus, focus, blur} = useFocus();
  return (
    <Card
      raised={focusable && isFocus}
      className={[styles.card, id].join(' ')}
      onMouseEnter={focusable && focus}
      onMouseLeave={focusable && blur}
    >
      <CardHeader
        title={name}
        subheader={email}
        avatar={<Avatar src={avatar} />}
      />
      <CardMedia 
        className={styles.cardMedia} 
        image={cover} 
      />
      {bio.length > 0 && <CardContent>
        <div dangerouslySetInnerHTML={{ __html: marked(bio) }} />
      </CardContent>}
    </Card>
  );
};