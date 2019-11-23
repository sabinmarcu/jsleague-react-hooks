import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

import Layout from './components/Layout';
import Preview from "./components/Preview";
import Editor from "./components/Editor";

function App () {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">React Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Preview></Preview>
      <Editor></Editor>
      <Layout>
      </Layout>
    </>
  );
}


export default App;
